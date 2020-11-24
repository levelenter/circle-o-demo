export namespace App {
  interface Meta {
    title: string
    description: string
    ogImage: string
  }

  interface Page {
    path: string
    title: string
    meta: Meta
    hashTags: string[]
  }

  interface LayoutState {
    headerClass?: string
    shareText?: string
    hashTags?: string[]
  }
}

declare namespace NodeJS {
  export interface ProcessEnv {
  }
}
