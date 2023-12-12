import { createI18n } from 'vue-i18n'


const messages = {
    en:{
        navigatorBar:{
            home:"Home",
            editor:"Editor",
            login:"Login",
            sysindex:"Index Management"
        }
    },
    zh:{
        navigatorBar:{
            home:"主页",
            editor:"文章编辑",
            login:"登录",
            sysindex:"主页管理"
        }
    }
}

let lang = navigator.language||navigator.userLanguage;
lang = lang.substr(0, 2)

const vuei18n = createI18n({
    locale: lang,
    messages,
    allowComposition: true,
})

export default vuei18n  