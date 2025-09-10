import {defineConfig, type DocumentActionComponent, type DocumentActionsContext} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {codeInput} from '@sanity/code-input'
import {PublishWithSerialActionAtStudy} from './publish-with-serial'
import {projectId, dataset} from './env'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: projectId!,
  dataset: dataset!,

  plugins: [structureTool(), visionTool(), media(), codeInput()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (
      prev: DocumentActionComponent[],
      context: DocumentActionsContext,
    ): DocumentActionComponent[] => {
      if (context.schemaType === 'study') {
        const withoutDefaultPublish = prev.filter((a) => a.action !== 'publish')

        return [
          PublishWithSerialActionAtStudy,
          ...withoutDefaultPublish,
        ] as DocumentActionComponent[]
      }
      return prev
    },
  },
})
