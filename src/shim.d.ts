declare module '@babel/helper-plugin-utils' {
  import { ConfigAPI, PluginItem } from '@babel/core'
  export const declare: (
    // eslint-disable-next-line @typescript-eslint/ban-types
    fn: (api: ConfigAPI, options: object) => PluginItem,
  ) => PluginItem
}

declare module '@babel/*'
