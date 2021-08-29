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
  
  app.generateFeedbacks = () => {
    const fbs = [{
      name:'Martin Wesselink',
      rate:5,
      review:'This is a very useful and accurate program to check your macro calculations, before you put them in the machine. Helps very good with the debugging of your program. I use it to check',
      location:APP.GOOGLE_PLAY()
    },{
      name:'Paul S',
      rate:5,
      review:'This software is a godsend for building macros. You can see the program as it would flow naturally if the program was written point-to-point. Great for testing out how the logic will play out ...',
      location:APP.GOOGLE_PLAY()
    },{
      name:'rabbit_goodwin',
      rate:5,
      review:'Amazing app I do a ton of programming at the machine (HAAS). This app is super helpful for writing new programs while it’s running and is perfect for testing new macros without ...',
      location:APP.APP_STORE()
    },{
      name:'Michael Hicks',
      rate:5,
      review:'A Must have app !',
      location:APP.GOOGLE_PLAY()
    },{
      name:'jared.s88',
      rate:5,
      review:'This app works as advertised that is for sure! It helped me troubleshoot and write some macro cycles I was attempting. I didn’t have time to test them on the machines at work every adjustment. So here I could nail down the code to then only fix minor controller differences in the code',
      location:APP.GOOGLE_PLAY()
    }]
    
    return fbs.map(f => {
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