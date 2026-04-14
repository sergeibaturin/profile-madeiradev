/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_PADDLE_CLIENT_TOKEN: string
  readonly VITE_PADDLE_PRICE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
