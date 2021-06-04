declare module '@babel/helper-plugin-utils' {
  import { ConfigAPI, PluginItem } from '@babel/core'

  export const declare: (
    fn: (api: ConfigAPI, options: object) => PluginItem,
  ) => PluginItem
}

declare module '@babel/*'
