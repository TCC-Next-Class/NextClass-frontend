import './styles/globals.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeTheme } from './composables/useAppearance';
import { useSession } from '@/stores/session'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

const session = useSession()

session.check(() => {
    app.use(router)

    app.mount('#app')
});

initializeTheme();
