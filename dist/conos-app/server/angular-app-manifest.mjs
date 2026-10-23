
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/conos-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/conos-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5002, hash: '06c051d286c6c906b6ce83cbca54c74292c8b0d17c9ba38ff7e90762b9df9e79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '9ababe08db7f39ea3b1ec49c4e0864a105dd2c549e540761de084545f8324c89', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4DLQ2YRR.css': {size: 17781, hash: 'jTkgZ5KlYQU', text: () => import('./assets-chunks/styles-4DLQ2YRR_css.mjs').then(m => m.default)}
  },
};
