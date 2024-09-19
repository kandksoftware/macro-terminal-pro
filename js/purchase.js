(function (app) {
  'use strict'
  app.purchase = (path) => {
    const psv = document.querySelector('#purchase-studio-version')
    if (psv) {
      psv.addEventListener('click', () => {
        localStorage.setItem("data", JSON.stringify({
          name: 'STUDIO',
          price: document.querySelector('#pay-price').innerHTML,
          license: 'unlimited number of devices'
        }))
        window.location.href = `${path}payment.html`
      })
    }
  }
})(APP);
