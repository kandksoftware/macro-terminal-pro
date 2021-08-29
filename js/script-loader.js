'use strict'
function ScriptLoader(srcs = []){
  this.srcs = srcs
  this.cursor = 0
  
  this.exec = (callback) => {
    if(this.cursor === this.srcs.length){
      callback()
      return
    }
    
    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.setAttribute('src', this.srcs[this.cursor])
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('charset', 'utf-8')
    script.addEventListener('load', () => {
      this.cursor++
      this.exec(callback)
    })
   
    head.insertBefore(script, head.firstChild);
  }
}



