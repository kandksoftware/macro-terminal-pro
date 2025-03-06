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

  app.getDemo = (path) => {
    const psv = document.querySelector('#get-demo')
    if (psv) {
      psv.addEventListener('click', () => {
        window.location.href = path
      })
    }
  }

  app.purchaseComponent = (selectedLang) => {
    const normalPrice = 529.00
    const dicount = 0.5
    const discountPrice = normalPrice - normalPrice * dicount
    const transl = {
      en: [
        'unlimited number of devices',
        'Purchase',
      ],
      es: [
        'número ilimitado de dispositivos',
        'Comprar',
      ],
      fr: [
        `nombre illimité d'appareils`,
        'Achat',
      ],
      de: [
        `unbegrenzte Anzahl an Geräten`,
        'Kauf',
      ],
      it: [
        `numero illimitato di dispositivi`,
        'Acquista',
      ],
      ko: [
        `무제한 기기 수`,
        '구매',
      ],
      ja: [
        `デバイス数無制限`,
        '購入',
      ],
      zh: [
        `无限数量的设备`,
        '购买',
      ],
      no: [
        "ubegrenset antall enheter",
        'Kjøpe',
      ],
      fi: [
        "rajaton määrä laitteita",
        'Ostaa',
      ],
      da: [
        "ubegrænset antal enheder",
        'Køb',
      ],
      nl: [
        `onbeperkt aantal apparaten`,
        'Aankoop',
      ],
      se: [
        "obegränsat antal enheter",
        'Köpa',
      ],
      ru: [
        `неограниченное количество устройств`,
        'Купить',
      ],
      hu: [
        "korlátlan számú eszköz",
        'Vásárlás',
      ],
      he: [
        `מספר בלתי מוגבל של מכשירים`,
        'לִרְכּוֹשׁ',
      ],
      pl: [
        `nieograniczona liczba urządzeń`,
        'Zakup',
      ]
    }

    const lang = transl[selectedLang] || transl['en']

    /*return `<div class="main__pricing" id="purchase">
              <div class="main__pricing-card">
                <div class="main__pricing-title">CNC Macro Simulator II STUDIO</div>
                <div class="main__pricing-desc">(${lang[0]})</div>
                <div class="main__pricing-normal-price ${normalPrice != discountPrice ? '' : 'hide'}">${normalPrice}</div>
                <div class="main__pricing-discount-price" id="pay-price">${discountPrice}</div>
              </div>
              <div class="main__pricing-card">
                <div class="main__pricing-pay-button-container">
                  <button class="main__pricing-pay-button" id="purchase-studio-version">${lang[1]}</button>
                </div>
              </div>
            </div>`*/

    return `<div class="main__pricing" id="purchase">
              <div class="main__pricing-card">
                <div class="main__pricing-title">CNC Macro Simulator II STUDIO</div>
                <div class="main__pricing-desc">(${lang[0]})</div>
                <div class="main__pricing-normal-price ${normalPrice != discountPrice ? '' : 'hide'}">${normalPrice}</div>
                <div class="main__pricing-discount-price" id="pay-price">${discountPrice}</div>
              </div>
              <div class="main__pricing-card">
                <div class="main__pricing-btn-container">
                  <button class="btn btn-brand-color btn-large" id="purchase-studio-version" style="margin-bottom:1.2rem">${lang[1]}</button>
                  <button class="btn btn--reverse btn-large" id="get-demo">Get demo</button>
                </div>
              </div>
            </div>`
  }
})(APP);
