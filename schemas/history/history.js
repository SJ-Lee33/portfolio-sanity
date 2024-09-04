import {defineType, defineField} from 'sanity'

const YEARS = [
  {title: '이전', value: 0},
  {title: '2019', value: 2019},
  {title: '2020', value: 2020},
  {title: '2021', value: 2021},
  {title: '2022', value: 2022},
  {title: '2023', value: 2023},
  {title: '2024', value: 2024},
]

const yearField = defineField({
  title: '년도',
  name: 'year',
  type: 'number',
  options: {
    list: YEARS,
  },
  validation: (Rule) => Rule.required(),
})

const contentField = defineField({
  title: '내용',
  name: 'content',
  type: 'array',
  description: 'list로 작성할 것',
  of: [
    {
      type: 'block',
    },
  ],
  validation: (Rule) => Rule.required(),
})

export default defineType({
  title: '이력',
  name: 'history',
  type: 'document',
  fields: [yearField, contentField],
  preview: {
    select: {
      year: 'year',
    },
    prepare: ({year}) => {
      const yearName =
        year && YEARS.flatMap((option) => (option.value === year ? [option.title] : []))
      return {
        title: `${yearName}년의 이력`,
      }
    },
  },
})
