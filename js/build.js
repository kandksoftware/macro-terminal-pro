'use strict'

const main = () => {
  const array = [{
    id:'header',
    content:`<nav class="nav">
      <div class="nav__container">
        <img class="nav__icon" src="resources/macro-terminal-icon.png" alt="Macro Terminal CNC">
        <div class="nav__name">
        </div>
      </div>
      <div class="nav__links"></div>
      <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
    <div class="menu-overlay"></div>
    <div class="menu"></div>`
  },{
    id:'footer',
    content:`<div class="footer__links">
      <a href="#main">Main</a>
      <a href="https://kandksoftware.github.io/macro-terminal-pro/product.html">Product</a>
      <a href="https://kandksoftware.github.io/macro-terminal-pro/knowledge.html">Knowledge</a>
      <a href="#">Contact</a>
      <a href="https://kandksoftware.github.io/macro-terminal-pro/faq.html">FAQ</a>
    </div>
    <div class="footer__copy">
      <a href="#!">Copyright © 2021 Mobile CAM CNC. All rights reserved.</a> 
      <a href="privacy-policy">Privacy Policy</a>
    </div>`
  },{
    id:'feedback',
    content:APP.generateFeedbacks()
  }]

  const components = [{
    n:'nav',
    id:'.nav__links'
  },{
    n:'menu',
    id:'.menu'
  },{
    n:'footer',
    id:'.footer__links'
  }]

  const menu = [{
    type:['nav','menu','footer'],
    link:'index.html#main',
    desc:'Main'
  },{
    type:['nav','menu'],
    link:'product.html',
    desc:'Product'
  },{
    type:['footer','menu'],
    link:'https://kandksoftware.github.io/entry/',
    desc:'Products'
  },{
    type:['nav','menu','footer'],
    link:'get-started.html',
    desc:'Get started'
  },{
    type:['nav','menu','footer'],
    link:'knowledge.html',
    desc:'Knowledge'
  },{
    type:['nav','menu','footer'],
    link:'index.html#contact',
    desc:'Contact'
  },{
    type:['footer'],
    link:'https://youtu.be/7C7BgGQ-uTo',
    desc:'Youtube'
  },{
    type:['footer'],
    link:'faq.html',
    desc:'FAQ'
  },{
    type:['nav','menu'],
    link:'#!',
    dec:['btn btn-brand-color btn-purchase'],
    desc:'Purchase'
  }]

  APP.injectTemplates(array)

  APP.buildMenu(
    components,
    menu
  )

  APP.listenMenu()
  
  const nc = document.querySelector('.nav__container')
  const att = document.createAttribute('onclick')
  att.value = "location.href='index.html'"
  nc.setAttributeNode(att)

  APP.initPurchaseBtnListener()
  
  APP.createElement('div','m-b')

  const app = document.querySelector('#app')
  if(app){
    app.classList.remove('hide')
  }
  
  document.querySelector('.footer__copy a').innerHTML =  `Copyright © ${ new Date().getFullYear() } Mobile CAM CNC. All rights reserved.`
}