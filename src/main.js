import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入 svgIcon
import installIcons from '@/icons'
import i18n from '@/i18n'

import './permission'

// 导入全局样式
import './styles/index.scss'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(i18n)
app.use(store).use(router).mount('#app')
