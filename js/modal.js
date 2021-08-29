(function(app){
  'use strict'
  app.initPurchaseBtnListener = () => {
    const pur = document.querySelectorAll('.btn-purchase')
    pur.forEach(p => {
      p.addEventListener('click',() => APP.modal().show())
    })
  }
  
  app.createElement = (en,v) => {
    const mod = document.createElement(en)
    const attb = document.createAttribute('class')
    attb.value = v
    mod.setAttributeNode(attb)
    document.body.appendChild(mod)
  }

  app.modal = () => {
    let d = document.querySelector('.m-b')
    let b = document.querySelector('body')
    return {
      show:() => {
        d.innerHTML = `<div class="modal-overlay"></div>
                        <div class="modal-window">
                          <a class="modal-window__link" href="https://apps.apple.com/us/app/macro-terminal-cnc/id1487942650">
                            <img class="modal-window__img" src="resources/app-store-badge.svg" alt="App Store"/>
                          </a>
                          <a class="modal-window__link" href="https://play.google.com/store/apps/details?id=com.kandksoftware.macroterminalpro">
                            <img class="modal-window__img" src="resources/google-play-badge.svg" alt="Google Play"/>
                          </a>
                        </div>`
        b.classList.add('active')
        let mwl = document.querySelectorAll('.modal-window__link')
        let overlay = document.querySelector('.modal-overlay')
        mwl.forEach(l => {
          l.addEventListener('click',() => APP.modal().hide())
        })
        overlay.addEventListener('click',() => APP.modal().hide())
      },
      hide:() => {
        d.innerHTML = ''
        b.classList.remove('active')
      }
    }
  }

})(APP);