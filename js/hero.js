(function (app) {
  'use strict'

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

  const heroText = {
    en: [
      'Built for experts. Ready for the toughest macros.',
      'Purchase',
      'Get demo'
    ],
    ko: [
      '전문가를 위해 설계되었습니다. 가장 까다로운 매크로도 완벽하게 처리합니다.',
      '구매',
      '데모 받기'
    ],
    ja: [
      'エキスパートのために設計。最も高度で難易度の高いマクロにも対応。',
      '購入',
      'デモを入手'
    ],
    zh: [
      '专为专家打造，轻松应对最复杂、最严苛的宏程序。',
      '购买',
      '获取演示版'
    ]
  }

  app.buildHero = (config, path, selectedLang) => {
    return `<section class="hero">
              <div class="hero__desc-container">
                <h3 class="hero__text">
                  ${heroText[selectedLang][0] || heroText['en'][0]}
                </h3>
                <div class="hero__btn-container">
                  <a class="btn btn-brand-color btn-large" href="${config.purchaseLink}">${heroText[selectedLang][1] || heroText['en'][1]}</a>
                  <a class="btn btn--reverse btn-large" href="${path}${config.demoLink}" style="margin-left: 10px;">${heroText[selectedLang][2] || heroText['en'][2]}</a>
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