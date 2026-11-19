
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
    'index.csr.html': {size: 6714, hash: '5c2227720d69e6d4ad0ea56bf04c0457ca18c503541c2c01400cd075d370771e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '4c28b8c7eaf93b315bd4cbd4db2a0180129efdc55e2ffeb33c5cf3b2f9bc4590', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'mi-reporte/index.html': {size: 36081, hash: '35e254ccd6d07825c39adb3d74e10205c6fa1046847e0a4b226f66a31d7aba1b', text: () => import('./assets-chunks/mi-reporte_index_html.mjs').then(m => m.default)},
    'ordenes/index.html': {size: 35101, hash: '34541fac1694c819baf6fcbc96ccd777e903d44cb8857cca58300db1ba322295', text: () => import('./assets-chunks/ordenes_index_html.mjs').then(m => m.default)},
    'styles-STR2HOS7.css': {size: 21672, hash: 'GFSiZyufxVs', text: () => import('./assets-chunks/styles-STR2HOS7_css.mjs').then(m => m.default)}
  },
};
