(function(app){
  const repl = (s,t,r) => {
    const OPEN = '{{'
    const CLOSE = '}}'
    const start = s.indexOf(OPEN)
    const stop = s.indexOf(CLOSE)
    let left = s.slice(0,start)
    let right = s.slice(stop + CLOSE.length,s.length)
    let center = s.slice(start + CLOSE.length,stop).trim()
  
    let f = (start !== -1 && stop !== -1)
    if(f){
      if(center === t){
        return repl(left + r + right,t,r)
      }else{
        return s.slice(0,stop + CLOSE.length) + repl(right,t,r)
      }
    }else{
      return s
    }
  }
  
  app.injectTemplates = array => {
    const b = document.querySelector('body')
    array.forEach(a => b.innerHTML = repl(b.innerHTML,a.id,a.content))
  }
})(APP);