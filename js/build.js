'use strict'

const main = () => {
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
    content: APP.purchaseComponent(selectedLang)
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
    es: [
      'Principal',
      'Características',
      'Conocimiento',
      'Youtube',
      'Cursos',
      'Compra',
      'Contacto',
      'Preguntas frecuentes',
      'Quiénes somos'
    ],
    fr: [
      'Principal',
      'Fonctionnalités',
      'Connaissances',
      'Youtube',
      'Cours',
      'Achat',
      'Contact',
      'FAQ',
      'À propos de nous'
    ],
    de: [
      'Hauptseite',
      'Funktionen',
      'Wissen',
      'Youtube',
      'Kurse',
      'Kaufen',
      'Kontakt',
      'FAQ',
      'Über uns'
    ],
    it: [
      'Principale',
      'Caratteristiche',
      'Conoscenza',
      'Youtube',
      'Corsi',
      'Acquista',
      'Contatti',
      'FAQ',
      'Chi siamo'
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
    ],
    no: [
      'Hoved',
      'Funksjoner',
      'Kunnskap',
      'Youtube',
      'Kurs',
      'Kjøpe',
      'Kontakt',
      'FAQ',
      'Om oss'
    ],
    fi: [
      'Main',
      "Ominaisuudet",
      "Tieto",
      'Youtube',
      "Kurssit",
      'Ostaa',
      'Ota yhteyttä',
      'FAQ',
      'Meistä'
    ],
    da: [
      'Main',
      'Funktioner',
      'Viden',
      'Youtube',
      'Kurser',
      'Køb',
      'Kontakte',
      'Ofte stillede spørgsmål',
      'Om os'
    ],
    nl: [
      'Hoofdpagina',
      'Functies',
      'Kennis',
      'Youtube',
      'Cursussen',
      'Aankoop',
      'Contact',
      'FAQ',
      'Over ons'
    ],
    se: [
      'Huvud',
      'Drag',
      'Kunskap',
      'YouTube',
      'Kurser',
      'Köpa',
      'Kontakta',
      'FAQ',
      "Om oss"
    ],
    ru: [
      'Главная',
      'Функции',
      'Знания',
      'Youtube',
      'Курсы',
      'Купить',
      'Контакты',
      'FAQ',
      'О нас'
    ],
    hu: [
      'Fő',
      "Jellemzők",
      'Tudás',
      'Youtube',
      "tanfolyamok",
      'Vásárlás',
      'Érintkezés',
      'GYIK',
      'Rólunk'
    ],
    he: [
      'רָאשִׁי',
      'תכונות',
      'יֶדַע',
      'יוטיוב',
      'קורסים',
      'לִרְכּוֹשׁ',
      'מַגָע',
      'שאלות נפוצות',
      'עלינו'
    ],
    pl: [
      'Główna',
      'Funkcje',
      'Wiedza',
      'Youtube',
      'Kursy',
      'Zakup',
      'Kontakt',
      'FAQ',
      'O nas'
    ]
  }

  const selectedTranslationMenu = translMenu[selectedLang] || translMenu['en']

  const menu = [{
    type: ['nav', 'menu', 'footer'],
    link: 'index.html#main',
    desc: selectedTranslationMenu[0]
  }, {
    type: ['nav', 'menu'],
    link: 'index.html#features',
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
  //handle the iframes
  APP.iframeSpinnerLoading()
  //goto the page section
  APP.goto()
  //gallery
  APP.listenGallerySelector()

  APP.listenLangSelector()
}