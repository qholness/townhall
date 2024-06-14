/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MAPBOX_KEY: string
    readonly VITE_APP_TITLE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
