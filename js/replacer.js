(function(app){
  'use strict'
  const obs = document.querySelectorAll('.h-k');

  const array = [{
    target:'Macro Terminal CNC',
    link:'https://kandksoftware.github.io/macro-terminal-pro/'
  },{
    target:'AVS (Advanced Validation System)',
    link:'avs.html'
  },{
    target:'Macro Lathe CNC',
    link:'https://kandksoftware.github.io/macro-lathe-cnc/'
  },{
    target:'contact us',
    link:'contact.html'
  },{
    target:'FAQ',
    link:'faq.html'
  }];

  [...obs].forEach(o => {
    let str = o.innerHTML

    array.forEach(a => {
      str = str.replaceAll(a.target,`<a class="highlight" href="${ a.link }"> ${ a.target }</a>`)
    })
    o.innerHTML = str
  });
  
})();