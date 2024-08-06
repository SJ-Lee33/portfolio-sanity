import {defineType, defineField} from 'sanity'

const yearField = defineField({
  title: '년도',
  name: 'year',
  type: 'number',
  options: {
    list: [
      {title: '이전', value: 0},
      {title: '2019', value: 2019},
      {title: '2020', value: 2020},
      {title: '2021', value: 2021},
      {title: '2022', value: 2022},
      {title: '2023', value: 2023},
      {title: '2024', value: 2024},
    ],
  },
  validation: (Rule) => Rule.required(),
})

const contentField = defineField({
  title: '내용',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
  ],
})

export default defineType({
  title: '이력',
  name: 'history',
  type: 'document',
  fields: [yearField, contentField],
  preview: {
    select: {
      title: 'year',
    },
  },
})
