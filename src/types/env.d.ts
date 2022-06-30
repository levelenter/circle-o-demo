interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_NOINDEX_NOFOLLOW: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}