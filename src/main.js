/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@/styles/styles.scss'
import '@core/scss/index.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'


import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
// import ToastPlugin from 'vue-toast-notification'
// import 'vue-toast-notification/dist/theme-bootstrap.css'

loadFonts()
const app = createApp(App)
app.use(vuetify)
app.use(createPinia())

app.use(LoadingPlugin)
// app.use(ToastPlugin)

app.use(router)
app.mount('#app')
