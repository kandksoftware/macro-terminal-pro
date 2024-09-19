(function (app) {
  'use strict'
  app.listenGallerySelector = () => {
    const galeryImgs = document.querySelectorAll('#gallery__selector img')
    const galeryPreview = document.querySelector('#gallery__preview img')
    if (galeryImgs) {
      for (let i = 0, l = galeryImgs.length; i < l; i++) {
        galeryImgs[i].addEventListener('click', () => {
          galeryPreview.src = galeryImgs[i].src
        })
      }
    }
  }
})(APP);
