import {defineType, defineField} from 'sanity'
import {skills} from '../const/skills'

const titleField = defineField({
  title: '포스팅 제목',
  name: 'title',
  type: 'string',
  validation: (Rule) => Rule.required(),
})

const skillField = defineField({
  title: '기술 스택',
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

const learningGoalField = defineField({
  title: '학습 목표',
  name: 'learningGoal',
  description: '이번 포스팅에서 다루는 내용의 서론',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
    },
    {
      type: 'code',
    },
  ],
})

const learningOutcomeField = defineField({
  title: '학습 성과',
  name: 'learningOutcome',
  description: '습득한 지식/기술, 결론만 적기',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
    },
    {
      type: 'code',
    },
  ],
})

const learningProcessField = defineField({
  title: '학습 과정',
  name: 'learningProcess',
  description: '무엇을 어떻게 배웠는지 설명 적기',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
    },
    {
      type: 'code',
    },
  ],
})

const learningInsightField = defineField({
  title: '아쉬움과 인사이트',
  name: 'learningInsight',
  description: '아려웠던 점, 부족했던 점, 교훈, 인사이트',
  type: 'date',
  options: {
    dateFormat: 'YYYY-MM',
    calendarTodayLabel: 'Today',
  },
})

const learningPlanField = defineField({
  title: '앞으로의 계획',
  name: 'learningPlan',
  description: '더 심화된 액션 플랜이 있다면 적기',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
    },
    {
      type: 'code',
    },
  ],
})

export default defineType({
  title: '학습 포스팅 (개별 포스팅)',
  name: 'study',
  type: 'document',
  fields: [
    titleField,

    skillField,
    thumbnailField,

    learningGoalField,
    learningOutcomeField,
    learningProcessField,
    learningInsightField,
    learningPlanField,
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
