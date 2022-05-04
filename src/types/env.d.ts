interface ImportMetaEnv {
  readonly SITE_URL: string;
  readonly NOINDEX_NOFOLLOW: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}