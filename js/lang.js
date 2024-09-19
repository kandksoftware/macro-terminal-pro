(function (app) {
  'use strict'
  const langList = [{
    id: 'en',
    flag: '🇺🇲',
    desc: 'English (US)',
  }, {
    id: 'es',
    flag: '🇪🇸',
    desc: 'Español'
  }, {
    id: 'fr',
    flag: '🇫🇷',
    desc: 'Français'
  }, {
    id: 'ja',
    flag: '🇯🇵',
    desc: '日本語'
  }, {
    id: 'ko',
    flag: '🇰🇷',
    desc: '한국어'
  }, {
    id: 'de',
    flag: '🇩🇪',
    desc: 'Deutsch'
  }, {
    id: 'zh',
    flag: '🇨🇳',
    desc: '简体中文'
  }, {
    id: 'it',
    flag: '🇨🇮',
    desc: 'Italiano'
  }, {
    id: 'se',
    flag: '🇸🇪',
    desc: 'Svenska'
  }, {
    id: 'no',
    flag: '🇳🇴',
    desc: 'Norsk'
  }, {
    id: 'nl',
    flag: '🇳🇱',
    desc: 'Nederlands'
  }, {
    id: 'fi',
    flag: '🇫🇮',
    desc: 'Suomi'
  }, {
    id: 'da',
    flag: '🇩🇰',
    desc: 'Dansk'
  }]

  const lang = {
    LANG_SELECTOR_COMPONENT: (selectedLang) => {
      return `<div id="lang-selector">
                <div id="lang-selected">${langList.find(lang => lang.id == selectedLang).flag}</div>
                <div class="lang-list">
                  ${langList.map(lang => `<span data-id="${lang.id}">${lang.flag} ${lang.desc}</span>`).join('')}
                </div>
              </div>`
    }
  }

  const pathEndsWith = (path, target) => {
    return path.indexOf(target) == path.length - target.length
  }

  const reducePath = (str, sep = '/') => {
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] == sep) {
        if (str[i - 1] == sep) continue
        else if (i == str.length - 1) continue
        else return str.slice(0, i)
      }
    }
    return str
  }

  app.listenLangSelector = () => {
    const items = document.querySelectorAll('.lang-list span')
    const selectedItem = document.querySelector('#lang-selected')
    if (items) {
      for (let i = 0, l = items.length; i < l; i++) {
        items[i].addEventListener('click', () => {
          localStorage.setItem("lang", items[i].dataset.id)
          selectedItem.innerHTML = langList.find(lang => lang.id == items[i].dataset.id).flag

          let path = reducePath(window.location.href, '?')
          console.log(path)
          path = reducePath(path, '#')

          if (pathEndsWith(path, '.html')) {
            path = reducePath(path)
          }

          if (app.isLangSelected()) {
            window.location.href = path.replace(path, reducePath(path) + '/' + items[i].dataset.id)
          }
          else {
            window.location.href = path + '/' + items[i].dataset.id
          }

        })
      }
    }
  }

  app.isLangSelected = () => {
    for (let lang of langList) {
      if (window.location.href.indexOf(`/${lang.id}/`) > -1) return true
    }
    return false
  }

  app.getLangSelected = () => {
    for (let lang of langList) {
      if (window.location.href.indexOf(`/${lang.id}/`) > -1) return lang.id
    }
    return 'en'
  }

  app.lang = lang
})(APP);
