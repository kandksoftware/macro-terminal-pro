'use strict'

const announcementBar = ({ discount, config }) => {
  return `<div class="announcement-bar">
            <div class="announcement-bar-text">Winter Sale: Get ${discount}% off!</div>
            <a class="announcement-bar-button" href="${config.purchaseLink}">Get it now</a>
          </div>`
}

const main = () => {
  //discount: 25/50/75
  const discount = 0

  const templates = []
  const config = APP.config

  //init templates based of config
  for (let key in config) {
    templates.push({ id: key, content: config[key].indexOf('?goto=') == -1 && config[key].indexOf('html') != -1 ? config[key] : config[key] })
  }

  templates.push({
    id: 'announcement-bar',
    content: discount == 0 ? '' : announcementBar({ discount, config })
  })

  templates.push({
    id: 'ext',
    content: 'cms, nc, cn, ncc, cnc, eia, txt, min, mpf'
  })

  templates.push({
    id: 'menu',
    content: APP.menuComponent()
  })

  templates.push({
    id: 'footer',
    content: `<div class="footer__links"></div>
    <div class="footer__copy">
      <a href="#!">Copyright © ${new Date().getFullYear()} ${config.companyName}. All rights reserved.</a> 
      <a href="privacy-policy.html">Privacy</a>
      | <a href="terms-of-service.html">Legal</a>
      | <a href="disclaimer.html">Disclaimer</a>
    </div>`
  })

  templates.push({
    id: 'current-year',
    content: new Date().getFullYear()
  })

  templates.push({
    id: 'purchase-component',
    content: APP.purchaseComponent(discount)
  })

  templates.push({
    id: 'hero-component',
    content: APP.buildHero(config)
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
    content: '<a class="back-link" href="knowledge.html"> back to the manual</a>'
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

  const menu = [{
    type: ['nav', 'menu', 'footer'],
    //link: 'index.html#main',
    link: '/',
    desc: 'Main'
  }, {
    type: ['nav', 'menu'],
    //link: 'index.html?goto=features',
    link: '/?goto=features',
    desc: 'Features'
  }, {
    type: ['nav', 'menu', 'footer'],
    link: `knowledge.html`,
    desc: 'Knowledge'
  }, {
    type: ['footer'],
    link: 'https://www.youtube.com/channel/UCbcwipev1XA_h8HGILF95GA',
    desc: 'Youtube',
    target: '_blank'
  }, {
    type: ['nav'],
    link: `courses.html`,
    desc: 'Courses',
    target: '_blank'
  }, {
    type: ['nav', 'menu'],
    link: config.purchaseLink,
    desc: 'Purchase',
    dec: ['btn btn-brand-color'],
  }, {
    type: ['nav', 'menu', 'footer'],
    link: `contact.html`,
    desc: 'Contact',
  }, {
    type: ['footer'],
    link: `faq.html`,
    desc: 'FAQ'
  }, {
    type: ['footer',],
    link: `about.html`,
    desc: 'About us'
  }]

  APP.injectTemplates(templates)

  APP.buildMenu(components, menu)

  APP.listenMenu()

  APP.createElement('div', 'm-b')

  const app = document.querySelector('#app')
  if (app) app.classList.remove('hide')

  const ss = document.querySelector('#splash-screen')
  if (ss) ss.classList.add('hide');

  [...document.querySelectorAll('.code-view')].forEach(e => {
    const hg = new Highlighter().exec(e.innerHTML)
    e.innerHTML = hg
  });

  APP.purchase()
  APP.getDemo(config.demoLink)
  //handle the iframes
  APP.iframeSpinnerLoading()
  //goto the page section
  APP.goto()
  //gallery
  APP.listenGallerySelector()

  if (discount != 0) {
    const KEY = 'modal-banner'
    const modalShown = sessionStorage.getItem(KEY)
    if (!modalShown) {
      setTimeout(() => {
        const array = ['', '', '']
        const infoModal = new ModalBanner({
          id: 'modal-banner',
          title: array[0],
          message: array[2],
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