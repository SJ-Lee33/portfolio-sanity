import {defineType, defineField} from 'sanity'

const yearField = defineField({
  title: '년도',
  name: 'year',
  type: 'number',
  options: {
    list: [
      {title: '이전', value: 0},
      {title: '2019', value: 1},
      {title: '2020', value: 2},
      {title: '2021', value: 3},
      {title: '2022', value: 4},
      {title: '2023', value: 5},
      {title: '2024', value: 6},
    ],
  },
  validation: (Rule) => Rule.required(),
})

const contentField = defineField({
  title: '내용',
  name: 'content',
  type: 'string',
  validation: (Rule) => Rule.required(),
})

export default defineType({
  title: '이력',
  name: 'history',
  type: 'document',
  fields: [yearField, contentField],
  preview: {
    select: {
      title: 'content',
    },
  },
})
