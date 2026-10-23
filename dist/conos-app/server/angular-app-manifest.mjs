
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/conos-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/conos-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5002, hash: '933ee267b1228316db3303b630a6a7bb83475c0d718cb92ff6ad6f61b3af1bbb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '445feff0811b61a15599e5750aa2404c64ca3da6f19884149e55617bd2b27419', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33999, hash: 'cafc77d115ab558c9b144de7a03f4de6a4abc8463a573745e62f62ce539f9b6e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4DLQ2YRR.css': {size: 17781, hash: 'jTkgZ5KlYQU', text: () => import('./assets-chunks/styles-4DLQ2YRR_css.mjs').then(m => m.default)}
  },
};
