import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {markdownSchema} from 'sanity-plugin-markdown'
// import {CustomMarkdownInput} from './custom_components/custom-markdown-input'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    media(),
    // markdownSchema({input: CustomMarkdownInput}),
  ],

  schema: {
    types: schemaTypes,
  },
})
