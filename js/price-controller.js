'use strict'

class Pricer {
  constructor({ products, goto }) {
    this._products = products
    this._goto = goto
  }
  static OPTION_ONE() {
    return 'limited'
  }

  static OPTION_TWO() {
    return 'unlimited'
  }

  static LICENSE_ONE() {
    return 'up to 5 devices'
  }

  static LICENSE_TWO() {
    return 'unlimited number of devices'
  }

  setPriceLabels() {
    const priceLabels = document.querySelectorAll('.price__value')
    if (priceLabels) {
      [...priceLabels].forEach(pl => {
        const att = pl.getAttribute('data-bind')
        if (att) {
          pl.innerHTML = `$${this._products[document.title][att].price} (${att === Pricer.OPTION_ONE() ? Pricer.LICENSE_ONE() : Pricer.LICENSE_TWO()})`
        }
      })
    }
  }

  handlePurchaseRequest() {
    const btns = document.getElementsByTagName('button')
    if (btns) {
      const btnsArray = [...btns]
      btnsArray.forEach(btn => {
        btn.addEventListener('click', () => {
          switch (btn.id) {
            case Pricer.OPTION_ONE():
            case Pricer.OPTION_TWO():

              const no = {
                name: document.title,
                price: this._products[document.title][btn.id].price,
                license: btn.id === Pricer.OPTION_TWO() ? Pricer.LICENSE_TWO() : Pricer.LICENSE_ONE()
              }

              localStorage.setItem("data", JSON.stringify(no))
              window.location.href = this._goto
              break
          }
        })
      })
    }
  }

  exec() {
    this.setPriceLabels()
    this.handlePurchaseRequest()
  }
}






