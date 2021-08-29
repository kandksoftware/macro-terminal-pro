(function(app){
  'use strict'
  app.initPurchaseBtnListener = items => {
    const pur = document.querySelectorAll('.btn-purchase')
    pur.forEach(p => {
      p.addEventListener('click',() => APP.modal(items).show())
    })
  }
  
  app.createElement = (en,v) => {
    const mod = document.createElement(en)
    const attb = document.createAttribute('class')
    attb.value = v
    mod.setAttributeNode(attb)
    document.body.appendChild(mod)
  }

  const renderItems = items => {
    return items.map(i => {
      return `<a class="modal-window__link" href="${ i.link }">
              <img class="modal-window__img" src="${ i.img }" alt="${ i.name }"/>
            </a>`
    }).join('')
  }

  app.modal = items => {
    let d = document.querySelector('.m-b')
    let b = document.querySelector('body')
    return {
      show:() => {
        d.innerHTML = `<div class="modal-overlay"></div>
                        <div class="modal-window">
                          ${ renderItems(items) }
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