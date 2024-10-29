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

  app.purchaseComponent = (selectedLang) => {
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

    return `<div class="main__pricing" id="purchase">
              <div class="main__pricing-card">
                <div class="main__pricing-title">CNC Macro Simulator II STUDIO</div>
                <div class="main__pricing-desc">(${lang[0]})</div>
                <div class="main__pricing-normal-price hide">529.00</div>
                <div class="main__pricing-discount-price" id="pay-price">529</div>
              </div>
              <div class="main__pricing-card">
                <div class="main__pricing-pay-button-container">
                  <button class="main__pricing-pay-button" id="purchase-studio-version">${lang[1]}</button>
                </div>
              </div>
            </div>`
  }
})(APP);
