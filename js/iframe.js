(function (app) {
  'use strict'
  app.iframeSpinnerLoading = () => {
    const ife = document.querySelectorAll('.iframe-container')
    for (let i = 0, l = ife.length; i < l; i++) {
      const spinner = ife[i].querySelector('.iframe-spinner')
      const iframe = ife[i].querySelector('iframe')
      spinner.style.display = 'block'
      iframe.addEventListener('load', () => {
        spinner.style.display = 'none'
        iframe.style.display = 'block'
      })
    }
  }
})(APP);
