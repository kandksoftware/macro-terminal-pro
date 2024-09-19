(function (app) {
  'use strict'
  app.goto = () => {
    const goto = new URLSearchParams(window.location.search).get('goto')
    const element = document.getElementById(goto)
    if (element) {
      element.scrollIntoView()
    }
  }
})(APP);
