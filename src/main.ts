import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from 'Plugins/router'
import { setupStore } from 'Store/index'

const app = createApp(App)
async function setupApp() {
    // 挂载pinia状态管理
    setupStore(app)
    // 挂载路由
    await setupRouter(app)

    app.mount('#app')
}

setupApp()