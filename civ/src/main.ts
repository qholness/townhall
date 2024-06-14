/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import Camera from 'simple-vue-camera'
import { useAppStore } from './stores/app'

const app = createApp(App)

registerPlugins(app)

app.component("camera", Camera)
app.mount('#app')


export const messageStore = useAppStore()