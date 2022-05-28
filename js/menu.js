(function(app){
  'use strict'
  const setText = (t,tg) => {
    document.querySelector(tg).innerHTML = t
  }

  const template = o => {
    const c = typeof o.dec !== 'undefined' ? `class="${ o.dec }"` : ''
    return `<a ${ c } href="${ o.link }">${ o.desc }</a>`
  }

  const filterWith = (array,t) => {
    return [...array].filter(({type}) => type.includes(t)).map(template).join('')
  }
  
  app.buildMenu = (com/* components */,m/* menu */) => {
    com.forEach(c => setText(filterWith(m,c.n),c.id))
  }

  app.listenMenu = () => {
    //for the listeners
    const ham = document.querySelector('.hamburger')
    const links = document.querySelectorAll('.menu a')
    const overlay = document.querySelector('.menu-overlay')
    //action
    const cl = ['.menu-overlay','.menu','.menu a','.hamburger','body']
    const commitAction = (at,cl) => {
      cl.forEach(cn => document.querySelector(cn).classList[at]('active'))
    }

    ham.addEventListener('click',function(){
      ham.classList.contains('active') ? commitAction('remove',cl) : commitAction('add',cl)
      window.scroll({top: 0})
    })

    overlay.addEventListener('click',() => commitAction('remove',cl))
    
    for(let i = 0,l = links.length;i < l;i++){
      links[i].addEventListener('click',() => {
        commitAction('remove',cl)
      })
    }
  }
})(APP);