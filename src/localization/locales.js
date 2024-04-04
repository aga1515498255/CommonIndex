import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    navigatorBar: {
      home: 'Home',
      editor: 'Editor',
      login: 'Login',
      sysindex: 'Index Management',
      tag: 'Tag',
      test: 'Test pages',
      blockEditor: 'Block Editor',
      contact: 'Contact Us',
      userManage: 'User Manage',
      AritcleManage: 'Article List'
    },
    contact: {
      contactName: 'Contact',
      phoneNo: 'Phone Number',
      email: 'Email'
    }
  },
  zh: {
    navigatorBar: {
      home: '主页',
      editor: '文章编辑',
      login: '登录',
      sysindex: '主页管理',
      tag: '标签管理',
      test: '测试页面',
      blockEditor: '主页编辑',
      contact: '联系我们',
      userManage: '用户管理',
      AritcleManage: '文章列表'
    },
    contact: {
      contactName: '联系人',
      phoneNo: '电话',
      email: '邮箱'
    },
    uiType: {
      CardCell: '卡片布局',
      RowCell: '行布局',
      CarouselCell: '轮播图',
      InfoCell: '详情表'
    }
  }
}

let lang = navigator.language || navigator.userLanguage
lang = lang.substr(0, 2)

const vuei18n = createI18n({
  locale: lang,
  messages,
  allowComposition: true
})

export default vuei18n
