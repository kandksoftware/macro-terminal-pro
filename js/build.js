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
    id: 'feedback',
    content: APP.generateFeedbacks([{
      name: 'Martin Wesselink',
      rate: 5,
      review: 'This is a very useful and accurate program to check your macro calculations, before you put them in the machine. Helps very good with the debugging of your program. I use it to check',
      location: APP.GOOGLE_PLAY()
    }, {
      name: 'Paul S',
      rate: 5,
      review: 'This software is a godsend for building macros. You can see the program as it would flow naturally if the program was written point-to-point. Great for testing out how the logic will play out ...',
      location: APP.GOOGLE_PLAY()
    }, {
      name: 'rabbit_goodwin',
      rate: 5,
      review: 'Amazing app I do a ton of programming at the machine (HAAS). This app is super helpful for writing new programs while it’s running and is perfect for testing new macros without ...',
      location: APP.APP_STORE()
    }, {
      name: 'Michael Hicks',
      rate: 5,
      review: 'A Must have app !',
      location: APP.GOOGLE_PLAY()
    }, {
      name: 'jared.s88',
      rate: 5,
      review: 'This app works as advertised that is for sure! It helped me troubleshoot and write some macro cycles I was attempting. I didn’t have time to test them on the machines at work every adjustment. So here I could nail down the code to then only fix minor controller differences in the code',
      location: APP.GOOGLE_PLAY()
    }])
  }, {
    id: 'current-year',
    content: new Date().getFullYear()
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
    link: 'products.html',
    desc: 'Products',
  }, {
    type: ['footer'],
    link: 'products.html',
    desc: 'Products',
  }, /*{
    type: ['nav', 'menu'],
    link: 'technical.html',
    desc: 'Technical'
  }, */{
    type: ['nav', 'menu', 'footer'],
    link: 'get-started.html',
    desc: 'Knowledge'
  }, {
    type: ['nav', 'menu', 'footer'],
    link: 'https://www.youtube.com/channel/UCbcwipev1XA_h8HGILF95GA',
    desc: 'Youtube'
  }, {
    type: ['nav', 'menu'],
    link: 'demo.html',
    desc: 'Get demo',
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
}