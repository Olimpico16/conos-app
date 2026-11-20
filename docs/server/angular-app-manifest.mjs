
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/conos-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/conos-app/ordenes",
    "route": "/conos-app"
  },
  {
    "renderMode": 2,
    "route": "/conos-app/ordenes"
  },
  {
    "renderMode": 2,
    "route": "/conos-app/mi-reporte"
  },
  {
    "renderMode": 2,
    "redirectTo": "/conos-app/ordenes",
    "route": "/conos-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6714, hash: '4c8c5395cccb6eb62651a63a5eefb98798103c26235bf9b7802411dccf1e001f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '4dc25839d2dc64ea9637b0355b9d542a2bfd15e70d7f751de11904cd7b200d9e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'mi-reporte/index.html': {size: 36045, hash: '353beca3257e296a810ea894ec5b9c23e44e18e7bbaee31bb94d7eb1ea6a8514', text: () => import('./assets-chunks/mi-reporte_index_html.mjs').then(m => m.default)},
    'ordenes/index.html': {size: 35059, hash: 'ba0b3aa456bb49f4d048ec4805697ef8b65c7c604401886be837c0f6ab821690', text: () => import('./assets-chunks/ordenes_index_html.mjs').then(m => m.default)},
    'styles-STR2HOS7.css': {size: 21672, hash: 'GFSiZyufxVs', text: () => import('./assets-chunks/styles-STR2HOS7_css.mjs').then(m => m.default)}
  },
};
