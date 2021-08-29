window.addEventListener('load', () => {
  const __PATH = 'js/'

  new ScriptLoader([
    'https://kandksoftware.github.io/remote/global.js',
    __PATH + 'modal.js',
    'https://kandksoftware.github.io/remote/menu.js',
    __PATH + 'template-injector.js',
    __PATH + 'feedback.js',
    __PATH + 'build.js',
  ]).exec(() => main())
})

