(function(){
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
    type:['footer'],
    link:'https://kandksoftware.github.io/entry/',
    desc:'Products'
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
    link:'faq.html',
    desc:'FAQ'
  },{
    type:['nav','menu'],
    link:'#!',
    dec:['btn btn-red'],
    desc:'Purchase'
  }]

  APP.buildMenu(
    components,
    menu
  )

  APP.listenMenu()
  
  const nc = document.querySelector('.nav__container')
  const att = document.createAttribute('onclick')
  att.value = "location.href='index.html'"
  nc.setAttributeNode(att)
})();

