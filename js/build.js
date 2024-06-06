'use strict'

const main = () => {
  //const APP_NAME = 'CNC Macro Simulator'
  const APP_NAME = 'PJ Software'
  const array = [{
    id: 'header',
    content: `<nav class="nav">
      <div class="nav__container">
        <img class="nav__icon" src="resources/icon.png" alt="${APP_NAME}">
        <div class="nav__name"></div>
      </div>
      <div class="nav__links"></div>
      <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
    <div class="menu-overlay"></div>
    <div class="menu">Inject here</div>`
  }, {
    id: 'footer',
    content: `<div class="footer__links"></div>
    <div class="footer__copy">
      <a href="#!">Inject here</a> 
      <a href="privacy-policy.html">Privacy Policy</a>
    </div>`
  }, {
    id: 'current-year',
    content: new Date().getFullYear()
  }, {
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
  }]

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

  const menu = [{
    type: ['nav', 'menu', 'footer'],
    link: 'index.html#main',
    desc: 'Main'
  }, {
    type: ['nav', 'menu'],
    link: 'technical.html',
    desc: 'Specification',
  }, /*{
    type: ['footer'],
    link: 'products.html',
    desc: 'Products',
  }, {
    type: ['nav', 'menu'],
    link: 'technical.html',
    desc: 'Technical'
  }, */{
    type: ['nav', 'menu', 'footer'],
    link: 'get-started.html',
    desc: 'Knowledge'
  }, {
    type: ['footer'],
    link: 'https://www.youtube.com/channel/UCbcwipev1XA_h8HGILF95GA',
    desc: 'Youtube',
    target: '_blank'
  }, {
    type: ['nav'],
    link: 'courses.html',
    desc: 'Courses',
    target: '_blank'
  }, {
    type: ['nav', 'menu'],
    link: 'pricing.html',
    desc: 'Purchase',
    dec: ['btn btn-brand-color'],
  }, {
    type: ['nav', 'menu', 'footer'],
    link: 'contact.html',
    desc: 'Contact'
  }, {
    type: ['footer'],
    link: 'faq.html',
    desc: 'FAQ'
  }/*, {
    type: ['nav', 'menu'],
    link: 'pricing.html',
    dec: ['btn btn-brand-color'],
    desc: 'Purchase'
  }*/, {
    type: ['footer',],
    link: 'about.html',
    desc: 'About us'
  }]

  APP.injectTemplates(array)

  APP.buildMenu(components, menu)

  APP.listenMenu()

  const nc = document.querySelector('.nav__container')
  const att = document.createAttribute('onclick')
  att.value = "location.href='index.html'"
  nc.setAttributeNode(att)

  APP.initPurchaseBtnListener([{
    name: 'App Store',
    link: 'https://apps.apple.com/us/app/macro-mill-plus/id1562501002',
    img: 'resources/app-store-badge.svg'
  }, {
    name: 'Google Play',
    link: 'https://play.google.com/store/apps/details?id=com.kandksoftware.macromillplus',
    img: 'resources/google-play-badge.svg'
  }])//modal

  APP.createElement('div', 'm-b')

  const app = document.querySelector('#app')
  if (app) app.classList.remove('hide')


  const ss = document.querySelector('#splash-screen')
  if (ss) ss.classList.add('hide')
  //inject a current date
  document.querySelector('.footer__copy a').innerHTML = `Copyright © ${new Date().getFullYear()} ${APP_NAME}. All rights reserved.`;

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

  const countDiscount = (price, discount = 0.5) => {
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

  const discount = 0.5
  const elm = document.getElementsByClassName('card--pricing')

  if (elm) {
    [...elm].forEach((_, i, arr) => {
      const product = products[i]
      for (let key in product) {
        const attr = arr[i].querySelector(`[data-id="${key}"]`)
        if (attr) {
          if (discount != 0) {
            if (key == 'price') attr.innerHTML = `<div style="text-decoration: line-through;color:lightgray;font-size:1.4rem">$${product[key]}</div>
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
  }

  const iframeSpinnerLoading = () => {
    const ife = document.querySelectorAll('.iframe-container')
    for (let i = 0, l = ife.length; i < l; i++) {
      const spinner = ife[i].querySelector('.iframe-spinner')
      const iframe = ife[i].querySelector('iframe')
      spinner.style.display = 'block'
      iframe.addEventListener('load', () => {
        spinner.style.display = 'none'
        iframe.style.display = 'block'
      })
    }
  }

  iframeSpinnerLoading()
}