'use strict'

const main = () => {
  const selectedLang = APP.getLangSelected()

  localStorage.setItem('lang', selectedLang)

  const templates = []
  const config = APP.config

  const path = window.location.href.indexOf('http://127.0.0') == 0 ? 'http://127.0.0.1:5502/dist/' : config.websiteName + '/'
  //init templates based of config
  for (let key in config) {
    templates.push({ id: key, content: config[key].indexOf('html') != -1 ? path + config[key] : config[key] })
  }

  templates.push({
    id: 'menu',
    content: `<nav class="nav">
                <div class="nav__container">
                  <img class="nav__icon" src="${APP.isLangSelected() ? '../' : ''}resources/icon.png" alt="${config.appName}">
                  <div class="nav__name"></div>
                </div>
                <div class="nav__links-container">
                  ${APP.lang.LANG_SELECTOR_COMPONENT(selectedLang)}
                  <div class="nav__links"></div>
                <div>
                <div class="hamburger">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </nav>
              <div class="menu-overlay"></div>
              <div class="menu">Inject here</div>`
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

  const transl = {
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
    jp: [
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

  //const selectedLang = localStorage.getItem("lang") || 'en'





  const menu = [{
    type: ['nav', 'menu', 'footer'],
    link: 'index.html#main',
    desc: transl[selectedLang][0]
  }, {
    type: ['nav', 'menu'],
    link: 'index.html#features',
    desc: transl[selectedLang][1]
  }, {
    type: ['nav', 'menu', 'footer'],
    link: `${path}get-started.html`,
    desc: transl[selectedLang][2]
  }, {
    type: ['footer'],
    link: 'https://www.youtube.com/channel/UCbcwipev1XA_h8HGILF95GA',
    desc: transl[selectedLang][3],
    target: '_blank'
  }, {
    type: ['nav'],
    link: `${path}courses.html`,
    desc: transl[selectedLang][4],
    target: '_blank'
  }, {
    type: ['nav', 'menu'],
    link: `${path}${config.purchaseLink}`,
    desc: transl[selectedLang][5],
    dec: ['btn btn-brand-color'],
  }, {
    type: ['nav', 'menu', 'footer'],
    link: `${path}contact.html`,
    desc: transl[selectedLang][6],
  }, {
    type: ['footer'],
    link: `${path}faq.html`,
    desc: transl[selectedLang][7]
  }, {
    type: ['footer',],
    link: `${path}about.html`,
    desc: transl[selectedLang][8]
  }]

  APP.injectTemplates(templates)

  APP.buildMenu(components, menu)

  APP.listenMenu()

  const nc = document.querySelector('.nav__container')
  const att = document.createAttribute('onclick')
  att.value = "location.href='index.html'"
  nc.setAttributeNode(att)

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

  /* new Pricer({
     products: {
       "Sell test": {
         "limited": {
           price: 0.20
         },
         "unlimited": {
           price: 0.40
         }
       },
       "CNC Macro Simulator II SD": {
         "limited": {
           price: 99
         },
         "unlimited": {
           price: 199
         }
       },
       "CNC Macro Simulator II MC": {
         "limited": {
           price: 159
         },
         "unlimited": {
           price: 259
         }
       },
       "CNC Macro Simulator II TC": {
         "limited": {
           price: 189
         },
         "unlimited": {
           price: 289
         }
       },
       "CNC Macro Simulator II TC-C": {
         "limited": {
           price: 220
         },
         "unlimited": {
           price: 320
         }
       },
       "CNC Macro Simulator II PRO": {
         "limited": {
           price: 260.99
         },
         "unlimited": {
           price: 360.99
         }
       },
       "CNC Macro Simulator II PRO-TC": {
         "limited": {
           price: 329
         },
         "unlimited": {
           price: 429
         }
       }
     },
     goto: 'payment.html'
   }).exec()*/

  /*const countDiscount = (price, discount = 0.5) => {
    const np = price * (1 - discount)
    return np.toFixed()
  }

  const products = [{
    name: 'SD (MILL)',
    price: '199.99'
  }, {
    name: 'MC (MILL)',
    price: '259.00'
  }, {
    name: 'XTC (TURN)',
    price: '320.00'
  }, {
    name: 'STUDIO',
    price: '529.00'
  }]

  const discount = 0.25
  const elm = document.getElementsByClassName('card--pricing')

  if (elm) {
    [...elm].forEach((_, i, arr) => {
      const product = products[i]
      for (let key in product) {
        const attr = arr[i].querySelector(`[data - id= "${key}"]`)
        if (attr) {
          if (discount != 0) {
            if (key == 'price') attr.innerHTML = `< div style = "text-decoration: line-through;color:lightgray;font-size:1.4rem" > $${ product[key]}</div>
    <span class="discounted-price">$${countDiscount(product[key], discount)}<div class="discount-label">${discount * 100}%</div></span>`
            else attr.innerHTML = product[key]
          } else {
            if (key == 'price') attr.innerHTML = product[key]
            else attr.innerHTML = product[key]
          }
        }
      }
      const btn = arr[i].querySelector('.btn--purchase')
      if (btn) btn.addEventListener('click', () => {
        localStorage.setItem("data", JSON.stringify({
          name: product.name,
          price: countDiscount(product.price, discount),
          license: 'unlimited number of devices'
        }))
        window.location.href = 'payment.html'
      })
    })
  }*/

  APP.purchase(path)
  //handle the iframes
  APP.iframeSpinnerLoading()
  //goto the page section
  APP.goto()
  //gallery
  APP.listenGallerySelector()

  APP.listenLangSelector()
}