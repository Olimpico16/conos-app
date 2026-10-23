
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
    'index.csr.html': {size: 6383, hash: '74830e9a897503ff25768a91dd0d25e10a6f389f634f26821796eebbe291a6f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'a8fa41431fc11af15d07d931d1aff90ab3697cbc2d230397fdfdbb8c4aa2e0a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35454, hash: '1906e3e25dc423f26fc60dbc1ffc5060fad4cb80a0329235076a41c3fe14484c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IHRCZMEO.css': {size: 20138, hash: '0mK9Y0gA0NM', text: () => import('./assets-chunks/styles-IHRCZMEO_css.mjs').then(m => m.default)}
  },
};
