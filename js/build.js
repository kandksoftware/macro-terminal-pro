'use strict'

const bannerText = ({ discount, selectedLang }) => {
  const text = {
    en: [
      `Winter Sale: Get ${discount}% off!`,
      'Get it now',
      `The new, updated version of our software will be available at a ${discount}% discount until the end of this month.`
    ],
    ko: [
      `겨울 세일: ${discount}% 할인!`,
      '지금 바로 구매하세요',
      `새롭게 업데이트된 저희 소프트웨어 버전을 이번 달 말까지 ${discount}% 할인된 가격으로 구매하실 수 있습니다.`
    ],
    ja: [
      `ウィンターセール：${discount}% オフ！`,
      '今すぐ入手',
      `当社のソフトウェアの新しい更新バージョンは、今月末まで ${discount}% 割引でご利用いただけます。`
    ],
    zh: [
      `冬季促销：立享${discount}%折扣！`,
      '立即获取',
      `本月底前，我们软件的全新升级版将以 ${discount}% 的折扣价出售。`
    ]
  }

  return text[selectedLang] || text['en']
}

const announcementBar = ({ discount, config, selectedLang }) => {
  const str = bannerText({ discount, selectedLang })
  return `<div class="announcement-bar">
            <div class="announcement-bar-text">${str[0]}</div>
            <a class="announcement-bar-button" href="${config.purchaseLink}">${str[1]}</a>
          </div>`
}

const main = () => {
  //discount: 25/50/75
  const discount = 25

  APP.detectAndChangeLang()

  const selectedLang = APP.getLangSelected()

  const templates = []
  const config = APP.config

  const path = window.location.href.indexOf('http://127.0.0') == 0 ? 'http://127.0.0.1:5502/dist/' : config.websiteName + '/'
  //init templates based of config
  for (let key in config) {
    templates.push({ id: key, content: config[key].indexOf('?goto=') == -1 && config[key].indexOf('html') != -1 ? path + config[key] : config[key] })
  }

  templates.push({
    id: 'announcement-bar',
    content: discount == 0 ? '' : announcementBar({ discount, config, selectedLang })
  })

  templates.push({
    id: 'ext',
    content: 'cms, nc, cn, ncc, cnc, eia, txt, min, mpf'
  })

  templates.push({
    id: 'menu',
    content: APP.menuComponent(selectedLang)
  })

  templates.push({
    id: 'footer',
    content: `<div class="footer__links"></div>
    <div class="footer__copy">
      <a href="#!">Copyright © ${new Date().getFullYear()} ${config.companyName}. All rights reserved.</a> 
      <a href="${path}privacy-policy.html">Privacy</a>
      | <a href="${path}terms-of-service.html">Legal</a>
      | <a href="${path}disclaimer.html">Disclaimer</a>
    </div>`
  })

  templates.push({
    id: 'current-year',
    content: new Date().getFullYear()
  })

  templates.push({
    id: 'pricing-feature',
    content: `<div class="separator"></div>
    <div class="card__content">
      Macro support
    </div>
    <div class="separator"></div>
    <div class="card__content">
      Haas support
    </div>
    <div class="separator"></div>
    <div class="card__content">
      Fanuc support
    </div>
    <div class="separator"></div>
    <div class="card__content">
      Centroid support
    </div>
    <div class="separator"></div>
    <div class="card__content">
      Macro export support
    </div>
    <div class="separator"></div>
    <div class="card__content">
      Advanced calculator
    </div>`
  })

  templates.push({
    id: 'purchase-component',
    content: APP.purchaseComponent(selectedLang, discount)
  })

  templates.push({
    id: 'purchase-converter-component',
    content: APP.purchaseConverterComponent(selectedLang)
  })

  templates.push({
    id: 'hero-component',
    content: APP.buildHero(config, path, selectedLang)
  })

  templates.push({
    id: 'gallery',
    content: APP.buildGallery()
  })

  templates.push({
    id: 'fanucA',
    content: '<div class="table-view__control-name">Fanuc 0</div>'
  })

  templates.push({
    id: 'fanucB',
    content: '<div class="table-view__control-name">Fanuc 16/18/21/30i/31i/32i/35i</div>'
  })

  templates.push({
    id: 'fanucC',
    content: '<div class="table-view__control-name">Fanuc 10/11/15</div>'
  })

  templates.push({
    id: 'haas',
    content: '<div class="table-view__control-name">Haas</div>'
  })

  templates.push({
    id: 'back-2-manual',
    content: '<a class="back-link" href="get-started.html"> back to the manual</a>'
  })

  const components = [{
    n: 'nav',
    id: '.nav__links'
  }, {
    n: 'menu',
    id: '.menu'
  }, {
    n: 'footer',
    id: '.footer__links'
  }]

  const translMenu = {
    en: [
      'Main',
      'Features',
      'Knowledge',
      'Youtube',
      'Courses',
      'Purchase',
      'Contact',
      'FAQ',
      'About us'
    ],
    ko: [
      '메인',
      '특징',
      '지식',
      'Youtube',
      '코스',
      '구매',
      '문의',
      'FAQ',
      '회사 소개'
    ],
    ja: [
      'メイン',
      '機能',
      '知識',
      'Youtube',
      'コース',
      '購入',
      'お問い合わせ',
      'よくある質問',
      '会社概要'
    ],
    zh: [
      '主页',
      '功能',
      '知识',
      'Youtube',
      '课程',
      '购买',
      '联系',
      '常见问题',
      '关于我们'
    ]
  }

  const selectedTranslationMenu = translMenu[selectedLang] || translMenu['en']

  const menu = [{
    type: ['nav', 'menu', 'footer'],
    link: 'index.html#main',
    desc: selectedTranslationMenu[0]
  }, {
    type: ['nav', 'menu'],
    link: 'index.html?goto=features',
    desc: selectedTranslationMenu[1]
  }, {
    type: ['nav', 'menu', 'footer'],
    link: `${path}get-started.html`,
    desc: selectedTranslationMenu[2]
  }, {
    type: ['footer'],
    link: 'https://www.youtube.com/channel/UCbcwipev1XA_h8HGILF95GA',
    desc: selectedTranslationMenu[3],
    target: '_blank'
  }, {
    type: ['nav'],
    link: `${path}courses.html`,
    desc: selectedTranslationMenu[4],
    target: '_blank'
  }, {
    type: ['nav', 'menu'],
    link: config.purchaseLink,
    desc: selectedTranslationMenu[5],
    dec: ['btn btn-brand-color'],
  }, {
    type: ['nav', 'menu', 'footer'],
    link: `${path}contact.html`,
    desc: selectedTranslationMenu[6],
  }, {
    type: ['footer'],
    link: `${path}faq.html`,
    desc: selectedTranslationMenu[7]
  }, {
    type: ['footer',],
    link: `${path}about.html`,
    desc: selectedTranslationMenu[8]
  }]

  APP.injectTemplates(templates)

  APP.buildMenu(components, menu)

  APP.listenMenu()

  APP.listenHeroImg()

  /*APP.initPurchaseBtnListener([{
    name: 'App Store',
    link: 'https://apps.apple.com/us/app/macro-mill-plus/id1562501002',
    img: 'resources/app-store-badge.svg'
  }, {
    name: 'Google Play',
    link: 'https://play.google.com/store/apps/details?id=com.kandksoftware.macromillplus',
    img: 'resources/google-play-badge.svg'
  }])//modal*/

  APP.createElement('div', 'm-b')

  const app = document.querySelector('#app')
  if (app) app.classList.remove('hide')

  const ss = document.querySelector('#splash-screen')
  if (ss) ss.classList.add('hide');

  [...document.querySelectorAll('.code-view')].forEach(e => {
    const hg = new Highlighter().exec(e.innerHTML)
    e.innerHTML = hg
  });

  APP.purchase(path)
  APP.purchaseConverter(path)
  APP.getDemo(config.demoLink)
  //handle the iframes
  APP.iframeSpinnerLoading()
  //goto the page section
  APP.goto()
  //gallery
  APP.listenGallerySelector()

  APP.listenLangSelector()
  if (discount != 0) {
    const KEY = 'modal-banner'
    const modalShown = sessionStorage.getItem(KEY)
    if (!modalShown) {
      setTimeout(() => {
        const str = bannerText({ discount, selectedLang })
        const infoModal = new ModalBanner({
          id: 'modal-banner',
          title: str[0],
          message: str[2],
          type: 'any',
          buttons: [
            { text: 'Got it', type: 'primary', action: 'close' }
          ]
        });
        infoModal.open();
        sessionStorage.setItem(KEY, 'true')
      }, 3000)
    }
  }
}