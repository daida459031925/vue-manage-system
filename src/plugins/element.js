import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
import 'element-plus/theme-chalk/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import messages from '../utils/i18n'

const i18n = createI18n({
  locale: localeZH.name,
  fallbackLocale: localeEN.name,
  messages,
})

//类似于java的接口默认方法调用
export default (app) => {
  app.use(ElementPlus, { locale:localeZH })
  app.use(i18n)
}
