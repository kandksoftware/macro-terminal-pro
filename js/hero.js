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

  app.buildHero = (config) => {
    return `<section class="hero">
              <div class="hero__desc-container">
                <h3 class="hero__text">
                  Built for experts. Ready for the toughest macros.
                </h3>
                <div class="hero__btn-container">
                  <a class="btn btn-brand-color btn-large" href="${config.purchaseLink}">Purchase</a>
                  <a class="btn btn--reverse btn-large" href="${config.demoLink}" style="margin-left: 10px;">Get demo</a>
                </div>
              </div>
              <div class="hero__media" style="background-image:url('resources/nremoval.png')">
              </div>
            </section>`
  }
})(APP);