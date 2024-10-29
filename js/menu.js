(function (app) {
  'use strict'
  const setText = (t, tg) => {
    document.querySelector(tg).innerHTML = t
  }

  const template = o => {
    const c = typeof o.dec !== 'undefined' ? `class="${o.dec}"` : ''
    return `<a ${c} href="${o.link}" ${typeof o.target !== 'undefined' ? ` target="${o.target}"` : ''}>${o.desc}</a>`
  }

  const filterWith = (array, t) => {
    return [...array].filter(({ type }) => type.includes(t)).map(template).join('')
  }

  app.buildMenu = (com/* components */, m/* menu */) => {
    com.forEach(c => setText(filterWith(m, c.n), c.id))
  }

  app.listenMenu = () => {
    //for the listeners
    const ham = document.querySelector('.hamburger')
    const links = document.querySelectorAll('.menu a')
    const overlay = document.querySelector('.menu-overlay')
    //action
    const cl = ['.menu-overlay', '.menu', '.menu a', '.hamburger', 'body']
    const commitAction = (at, cl) => {
      cl.forEach(cn => document.querySelector(cn).classList[at]('active'))
    }

    ham.addEventListener('click', function () {
      ham.classList.contains('active') ? commitAction('remove', cl) : commitAction('add', cl)
      window.scroll({ top: 0 })
    })

    overlay.addEventListener('click', () => commitAction('remove', cl))

    for (let i = 0, l = links.length; i < l; i++) {
      links[i].addEventListener('click', () => {
        commitAction('remove', cl)
      })
    }
    //go to the landing page if the user click on the company's name
    const nc = document.querySelector('.nav__container')
    const att = document.createAttribute('onclick')
    att.value = "location.href='index.html'"
    nc.setAttributeNode(att)
  }

  app.menuComponent = (selectedLang) => {
    return `<nav class="nav">
            <div class="nav__container">
              <img class="nav__icon" src="${app.isLangSelected() ? '../' : ''}resources/icon.png" alt="${app.config.appName}">
              <div class="nav__name"></div>
            </div>
            <div class="nav__links-container">
              ${app.lang.LANG_SELECTOR_COMPONENT(selectedLang)}
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
  }
})(APP);