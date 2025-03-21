(function (app) {
  'use strict'

  const setBackgroundImage = (elm, imageUrl, onError = null) => {
    const img = new Image()
    img.onload = () => elm.style.backgroundImage = `url('${imageUrl}')`
    img.onerror = () => { if (onError) onError() }
    img.src = imageUrl
  }

  app.exec = (media, src) => {
    media.style.backgroundImage = setBackgroundImage(media, src, () => {
      media.style.backgroundImage = setBackgroundImage(media, '../' + src)
    })
  }
})(APP);