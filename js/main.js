window.addEventListener('load', () => {
  const __PATH = 'js/'

  new ScriptLoader([
    __PATH + 'global.js',
    __PATH + 'modal.js',
    __PATH + 'menu.js',
    __PATH + 'template-injector.js',
    __PATH + 'feedback.js',
    __PATH + 'build.js',
  ]).exec(() => main())
})

