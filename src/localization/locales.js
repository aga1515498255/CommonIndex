import { createI18n } from 'vue-i18n'


const messages = {
    en:{
        navigatorBar:{
            home:"Home",
            editor:"Editor",
            login:"Login",
            sysindex:"Index Management",
            tag:"Tag",
            blockIndex:"block Index",
            blockEditor:"Block Editor",
            contact:"Contact Us"
        },
        contact:{
            contactName:"Contact"
        }
    },
    zh:{
        navigatorBar:{
            home:"主页",
            editor:"文章编辑",
            login:"登录",
            sysindex:"主页管理",
            tag:"标签管理",
            blockIndex:"blockIndex",
            blockEditor:"主页编辑",
            contact:"联系我们"
        },
        contact:{
            contactName:"联系人"
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