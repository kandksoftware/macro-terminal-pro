window.addEventListener('load', () => {
  const __PATH = 'js/'
  const __REMOTE_PATH = 'https://kandksoftware.github.io/remote/'

  new ScriptLoader([
    __PATH + 'global.js',
    __PATH + 'modal.js',
    __PATH + 'menu.js',
    __PATH + 'template-injector.js',
    __PATH + 'feedback.js',
    __PATH + 'replacer.js',
    __PATH + 'highlighter.js',
    __PATH + 'build.js',
  ]).exec(() => main())
})

