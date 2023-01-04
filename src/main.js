import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
// manually selected를 통해 직접 세팅된 모습 (편리하다!)
