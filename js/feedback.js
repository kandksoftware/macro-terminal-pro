(function(app){
  'use strict'
  app.APP_STORE = () => 0

  app.GOOGLE_PLAY = () => 1

  app.generateRate = rate => {
    let ns = ''
    for(let i = 0;i < rate;i++){
      ns += `<span class="fa fa-star checked"></span>`
    }
    return ns
  }

  app.generateLocation = loc => {
    return loc === APP.GOOGLE_PLAY() ? 'https://play.google.com/store/apps/details?id=com.kandksoftware.macroterminalpro' : 'https://apps.apple.com/us/app/macro-terminal-pro-full/id1487942650'
  }
  
  app.generateFeedbacks = array => {
    return array.map(f => {
      return `<div class="customer">
                <div class="customer__container">
                  <h1 class="customer__name customer--abs">${ f.name }</h1>
                </div>
                <div class="customer__container">
                  <div class="customer__rate customer--abs">
                    ${ APP.generateRate(f.rate) }
                  </div>
                </div>
                <div class="customer__container" style="height:55%;overflow:auto;">
                  <h3 class="customer__review">
                    ${ f.review }
                  </h3>
                </div>
                <div class="customer__container">
                  <a class="customer__link btn btn-brand-color customer--abs" href="${ APP.generateLocation(f.location) }">Read</a>
                </div>
              </div>`
    }).join('')
  }

})(APP);
