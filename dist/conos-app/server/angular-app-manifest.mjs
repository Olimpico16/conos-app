
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4992, hash: '7f7670be58eb3057d01cb2f4af385a4bf9c65c6cdbf2c37b2c3f2ccfcbe945dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '68841ca1a370346f2159f8ad087b851a958d61ae6e04c901562e6a1ef7eea80d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4DLQ2YRR.css': {size: 17781, hash: 'jTkgZ5KlYQU', text: () => import('./assets-chunks/styles-4DLQ2YRR_css.mjs').then(m => m.default)}
  },
};
