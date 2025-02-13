window.addEventListener('load', () => {
  const __PATH = 'js/'

  new ScriptLoader([
    __PATH + 'global.js',
    __PATH + 'config.js',
    __PATH + 'modal.js',
    __PATH + 'menu.js',
    __PATH + 'template-injector.js',
    __PATH + 'feedback.js',
    __PATH + 'replacer.js',
    __PATH + 'hero.js',
    __PATH + 'highlighter.js',
    __PATH + 'price-controller.js',
    __PATH + 'gallery.js',
    __PATH + 'iframe.js',
    __PATH + 'goto.js',
    __PATH + 'purchase.js',
    __PATH + 'lang.js',
    __PATH + 'build.js',
  ]).exec(() => main())
})

