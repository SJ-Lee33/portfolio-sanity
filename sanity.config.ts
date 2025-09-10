import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {codeInput} from '@sanity/code-input'
import {projectId, dataset} from './env'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: 'production',
  projectId: projectId!,
  dataset: dataset!,

  plugins: [structureTool(), visionTool(), media(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
