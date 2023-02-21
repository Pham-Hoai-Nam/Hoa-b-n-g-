import { createVuestic } from 'vuestic-ui'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'

import App from './App.vue'
import router from './router'
import vuesticGlobalConfig from './services/vuestic-ui/global-config'

const app = createApp(App)
import {
    TableComponent,
  } from "@/components/index.ts";
app.component("table-component", TableComponent);

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(createVuestic({ config: vuesticGlobalConfig }))
app.mount('#app')
