(function (app) {
  'use strict'
  app.purchase = () => {
    const psv = document.querySelector('#purchase-studio-version')
    if (psv) {
      psv.addEventListener('click', () => {
        localStorage.setItem("data", JSON.stringify({
          name: 'STUDIO',
          price: document.querySelector('#pay-price').innerHTML,
          license: 'unlimited number of devices'
        }))
        window.location.href = 'payment.html'
      })
    }
  }

  app.getDemo = (path) => {
    const psv = document.querySelector('#get-demo')
    if (psv) {
      psv.addEventListener('click', () => {
        window.location.href = path
      })
    }
  }

  app.purchaseComponent = (discount = 0) => {
    const normalPrice = 529.00
    const discountPrice = normalPrice - normalPrice * discount * 0.01


    return `<div class="main__pricing" id="purchase">
              <div class="main__pricing-card">
                <div class="main__pricing-title">CNC Macro Simulator II STUDIO</div>
                <div class="main__pricing-desc">(unlimited number of devices)</div>
                <div class="main__pricing-normal-price ${normalPrice != discountPrice ? '' : 'hide'}">${normalPrice}</div>
                <div class="main__pricing-discount-price" id="pay-price">${discountPrice}</div>
              </div>
              <div class="main__pricing-card">
                <div class="main__pricing-btn-container">
                  <button class="btn btn-brand-color btn-large" id="purchase-studio-version" style="margin-bottom:1.2rem">Purchase</button>
                </div>
              </div>
            </div>`
  }
})(APP);
