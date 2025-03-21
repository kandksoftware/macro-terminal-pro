(function (app) {
  'use strict'
  app.buildGallery = () => {
    return `<div id="gallery">
              <div id="gallery__preview">
                <img src="" alt=""/>
              </div>
              <div id="gallery__selector"></div>
            </div>`
  }

  app.listenGallerySelector = () => {
    const image = img => `<img src="${APP.isLangSelected() ? '../' + img[0] : img[0]}" alt="${img[1]}">`

    const getSrc = src => APP.isLangSelected() ? '../' + src : src

    const setImage = (img, data) => {
      img.src = getSrc(data[0])
      img.alt = data[1]
    }

    const list = [
      ['resources/conversational-programming.png', 'cnc conversational programming'],
      ['resources/macro-circle.png', 'a circle generate using parametric programming'],
      ['resources/laser2.png', 'cnc laser cutter program using Fanuc Macro B'],
      ['resources/debugging.png', 'debugging macro program using built-in debugger'],
      ['resources/sphere.png', 'creating sphere using programming parametric'],
      ['resources/plasma.png', 'cnc plasma cutter program'],
      ['resources/laser.png', 'cnc laser cutter program'],
      ['resources/circular-pocket.png', 'fanuc macro B pocket milling macro'],
      ['resources/gear.png', 'getting data of gear cnc program'],
      ['resources/oval.png', 'testing oval macro program']
    ]

    const media = document.querySelector('#gallery__preview img')
    const gallerySelector = document.querySelector('#gallery__selector')


    if (media && gallerySelector) {
      gallerySelector.innerHTML = list.map(img => image(img)).join('')
      setImage(media, list[0])
    }

    const mediaSelected = document.querySelectorAll('#gallery__selector img')

    if (mediaSelected) {
      for (let i = 0, l = mediaSelected.length; i < l; i++) {
        mediaSelected[i].addEventListener('click', () => setImage(media, list[i]))
      }
    }
  }
})(APP);
