import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MotionPlugin } from '@vueuse/motion';

createApp(App)
.use(router)
.use(MotionPlugin)
.mount('#app')

