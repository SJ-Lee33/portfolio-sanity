import {defineType, defineField} from 'sanity'
import {skills} from '../const/skills'

const typeField = defineField({
  title: '분류',
  name: 'projectTypes',
  type: 'object',
  fields: [
    {
      title: '개발',
      name: 'development',
      initialValue: false,
      type: 'boolean',
    },
    {
      title: '마케팅',
      name: 'marketing',
      initialValue: false,
      type: 'boolean',
    },
    {
      title: '디자인',
      name: 'design',
      initialValue: false,
      type: 'boolean',
    },
  ],
})

const titleField = defineField({
  title: '프로젝트 제목',
  name: 'title',
  type: 'string',
  validation: (Rule) => Rule.required(),
})

const skillField = defineField({
  title: '기술스택',
  name: 'skill',
  type: 'array',
  of: [{type: 'string'}],
  options: {
    list: [...skills.map((skill) => ({title: skill, value: skill}))],
  },
  validation: (Rule) => Rule.required(),
})

const thumbnailField = defineField({
  title: '썸네일',
  name: 'thumbnail',
  type: 'image',
  validation: (Rule) => Rule.required(),
})

const roleField = defineField({
  title: '나의 역할',
  name: 'role',
  description: '예) 엔지니어 (개인 프로젝트), 디자이너 (팀 프로젝트)',
  type: 'string',
  validation: (Rule) => Rule.required(),
})

const contributionField = defineField({
  title: '핵심 기여',
  name: 'contribution',
  description: '핵심 기여 내용을 쉼표로 구분',
  type: 'text',
  validation: (Rule) => Rule.required(),
})

const releaseDateField = defineField({
  title: '프로젝트 출시 년도',
  name: 'releaseDate',
  type: 'date',
  options: {
    dateFormat: 'YYYY-MM',
    calendarTodayLabel: 'Today',
  },
})

const durationField = defineField({
  title: '프로젝트 개발 기간',
  name: 'duration',
  type: 'string',
  description: '1년, 1년 2개월',
})

const summaryField = defineField({
  title: '프로젝트 요약',
  name: 'summary',
  type: 'text',
  description: '리스트에 표시될 요약 설명, 어미 없어도 됨.',
})

const contentField = defineField({
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [{type: 'block'}],
})

const imagesField = defineField({
  title: '추가 이미지들',
  name: 'images',
  type: 'array',
  of: [{type: 'image'}],
})

export default defineType({
  title: '프로젝트',
  name: 'project',
  type: 'document',
  fields: [
    typeField,
    titleField,

    skillField,
    thumbnailField,
    roleField,
    contributionField,

    releaseDateField,
    durationField,

    summaryField,
    contentField,

    imagesField,
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
