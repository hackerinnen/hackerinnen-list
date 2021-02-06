import { createApp } from 'vue'
import App from './App.vue'
import VueGapi from 'vue-gapi'

const app = createApp(App)

app.use(VueGapi, {
  apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
  clientId: `${process.env.VUE_APP_GOOGLE_SHEETS_CLIENT_ID}.apps.googleusercontent.com`,
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
})

app.mount('#app')
