(function (app) {
  'use strict'

  /*app.buildHero = () => {
    return `<section class="hero">
              <div class="hero__desc-container">
                <h3 class="hero__text">
                  Improve your workflow by creating
                </h3>
                <h3 class="hero__text">
                  and testing CNC programs faster
                </h3>
                <div class="hero__btn-container">
                  <a class="btn btn-brand-color btn-large" href="{{ purchaseLink }}">Purchase</a>
                  <a class="btn btn--reverse btn-large" href="{{ demoLink }}" style="margin-left: 10px;">Get demo</a>
                </div>
              </div>
              
              <video autoplay loop muted playsinline class="hero__video-container"></video>
              
              <div class="hero__media-btn-container">
                <button class="btn btn-brand-color" data-id="mill">Mill</button>
                <button class="btn btn-brand-color" data-id="lathe">Lathe</button>
                <button class="btn btn-brand-color" data-id="macro">Macro</button>
              </div>
            </section>`
  }*/
  /*app.buildHero = (config, path) => {
    return `<section class="hero">
              <div class="hero__desc-container">
                <h3 class="hero__text">
                  Improve your workflow by creating
                </h3>
                <h3 class="hero__text">
                  and testing CNC programs faster
                </h3>
                <div class="hero__btn-container">
                  <a class="btn btn-brand-color btn-large" href="${config.purchaseLink}">Purchase</a>
                  <a class="btn btn--reverse btn-large" href="${path}${config.demoLink}" style="margin-left: 10px;">Get demo</a>
                </div>
              </div>
              
              <div class="hero__media"></div>
              
              <div class="hero__media-btn-container">
                <button class="btn btn-brand-color" data-id="mill">Mill</button>
                <button class="btn btn-brand-color" data-id="lathe">Lathe</button>
                <button class="btn btn-brand-color" data-id="macro">Macro</button>
              </div>
            </section>`
  }*/

  app.buildHero = (config, path) => {
    return `<section class="hero">
              <div class="hero__desc-container">
                <h3 class="hero__text">
                  Top-rated software trusted by experts worldwide
                </h3>
                <div class="hero__btn-container">
                  <a class="btn btn-brand-color btn-large" href="${config.purchaseLink}">Purchase</a>
                  <a class="btn btn--reverse btn-large" href="${path}${config.demoLink}" style="margin-left: 10px;">Get demo</a>
                </div>
              </div>
              
              <div class="hero__media"></div>
              
              <div class="hero__media-btn-container">
                <button class="btn btn-brand-color" data-id="mill">Mill</button>
                <button class="btn btn-brand-color" data-id="lathe">Lathe</button>
                <button class="btn btn-brand-color" data-id="plasma">Plasma</button>
                <button class="btn btn-brand-color" data-id="macro">Macro</button>
              </div>
            </section>`
  }

  app.listenHeroImg = () => {
    const list = {
      mill: 'resources/sphere.png',
      lathe: 'resources/lathe-auto.png',
      plasma: 'resources/plasma.png',
      macro: 'resources/macro-auto.png',
    }

    const media = document.querySelector('.hero__media')
    const mediaSelected = document.querySelectorAll('.hero__media-btn-container>button')


    if (mediaSelected && media) {
      for (const ms of mediaSelected) {
        const src = list[ms.dataset.id] || list['mill']
        APP.exec(media, list['mill'])//init main image
        ms.addEventListener('click', () => APP.exec(media, src))
      }
    }
  }

  app.listenHeroVideo = () => {
    const playVideo = (src, el, parent) => {
      el.setAttribute("src", src)
      el.setAttribute("type", "video/mp4")
      parent.appendChild(el)
    }

    const list = {
      mill: 'resources/sphere.png',
      lathe: 'resources/lathe-auto.png',
      macro: 'resources/macro-auto.png',
    }

    const media = document.querySelector('.hero__video-container')
    let dir = ''

    const source = document.createElement("source")
    playVideo(list['mill'], source, media)
    source.onerror = () => {
      dir = '../'

      playVideo(dir + list['mill'], source, media)
    };


    const mediaSelected = document.querySelectorAll('.hero__media-btn-container>button')

    if (mediaSelected && media) {
      for (const ms of mediaSelected) {
        const src = list[ms.dataset.id] || list['mill']
        ms.addEventListener('click', () => {
          playVideo(dir + src, source, media)
        })
      }
    }
  }
})(APP);