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
})(APP);

