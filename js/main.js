window.addEventListener('load', () => {
  const __PATH = 'js/'
  const __REMOTE_PATH = 'https://kandksoftware.github.io/remote/'

  new ScriptLoader([
    __REMOTE_PATH + 'global.js',
    __PATH + 'modal.js',
    __REMOTE_PATH + 'menu.js',
    __REMOTE_PATH + 'template-injector.js',
    __REMOTE_PATH + 'feedback.js',
    __PATH + 'build.js',
  ]).exec(() => main())
})

