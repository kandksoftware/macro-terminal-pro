(function (app) {
  'use strict'

  const calcPrice = ({ fullPrice, discount }) => {
    const discountPrice = fullPrice - fullPrice * discount * 0.01
    const savedMoney = (fullPrice - discountPrice).toFixed(2)
    return {
      discountPrice,
      savedMoney
    }
  }
  app.purchase = ({ discount, fullPrice }) => {
    const { discountPrice, savedMoney } = calcPrice({ fullPrice, discount })
    const psv = document.querySelector('#purchase-studio-version')
    if (psv) {
      psv.addEventListener('click', () => {
        localStorage.setItem("data", JSON.stringify({
          name: 'STUDIO',
          price: discountPrice,
          savings: savedMoney,
          regular: fullPrice,
          license: 'unlimited number of devices',
          discount
        }))
        window.location.href = 'checkout.html'
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

  app.purchaseComponent = ({ fullPrice, discount = 0 }) => {
    const { discountPrice, savedMoney } = calcPrice({ fullPrice, discount })

    const isDiscount = fullPrice !== discountPrice

    const discountBadge = (discount) => {
      return `<div class="purchase__discount-badge-container">
                <div class="purchase__discount-badge">
                  SAVE ${discount}%
                </div>
              </div>`
    }

    const savingsBadge = (savedMoney) => {
      return `<div class="purchase__savings">
                You save $${savedMoney}
              </div>`
    }

    const originalPriceBadge = (fullPrice) => {
      return `<div class="purchase__original-price">
                  Regular price:
                  <strong>$${fullPrice} USD</strong>
                </div>`
    }

    return `<div class="main__pricing" id="purchase">
              <div class="main__pricing-card main__pricing-card-left">
                <div class="purchase__title">CNC Macro Simulator II STUDIO</div>
                  <p class="purchase__description hide">
                    Create • Test • Train
                  </p>

                  <ul class="purchase__features">
                    <li class="purchase__feature">
                      <span class="purchase__feature-icon">✓</span>
                      Unlimited number of devices
                    </li>

                    <li class="purchase__feature">
                      <span class="purchase__feature-icon">✓</span>
                      Full Studio functionality
                    </li>

                    <li class="purchase__feature">
                      <span class="purchase__feature-icon">✓</span>
                      Lifetime license
                    </li>

                    <li class="purchase__feature">
                      <span class="purchase__feature-icon">✓</span>
                      Professional support
                    </li>

                  </ul>
              </div>
              <div class="purchase__spacer"></div>
              <div class="main__pricing-card main__pricing-card-right">
                ${isDiscount ? discountBadge(discount) : ''}

                <div class="purchase__price-label">
                  Special price
                </div>

                ${isDiscount ? originalPriceBadge(fullPrice) : ''}

                <div class="purchase__price">
                  <span class="purchase__price-urrency">$</span>
                  <span class="purchase__price-amount" id="purchase__price-amount">
                    ${isDiscount ? discountPrice : fullPrice}
                  </span>
                  <span class="purchase__price-period">
                    USD
                  </span>
                </div>

                 ${isDiscount ? savingsBadge(savedMoney) : ''}
                
                <button class="btn btn-brand-color btn-large" id="purchase-studio-version" style="width:100% !important">
                  <span>
                    Purchase Studio
                    <span class="arrow">→</span>
                  </span>
                </button>
                
                <div class="purchase__secure">
                  <span class="purchase__secure-icon">🔒</span>
                  Secure checkout
                </div>
              </div>
            </div>`
  }
})(APP);



