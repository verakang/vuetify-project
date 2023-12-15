/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Echarts
import Echarts from 'vue-echarts'
import 'echarts'

// VueDatePicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

registerPlugins(app)
app.component('VueDatePicker', VueDatePicker);
app.use(VueAxios, axios)
app.mount('#app')
