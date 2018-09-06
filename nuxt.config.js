const pkg = require('./package')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', [
        '@/assets/css/utilities/_variables.scss',
        '@/assets/css/utilities/_helpers.scss',
        '@/assets/css/utilities/_normalize.scss',
        '@/assets/css/base/_grid.scss',
        '@/assets/css/base/_buttons.scss'
    ]],
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: true
    },
    extend(config, { isDev, isClient, isServer }){
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg)$/'){
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: 'img/[name].[hash:7].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 1,
                  verbose: true
                },
              }
            },
            ];
          delete rule.loader;
          delete rule.options;
        }
      })
    }
  },
  vendor: ['image-webpack-loader'],
  generate: {
    fallback: true,
    fallback: "404.html",
    subFolders: false,
    routes: [
      '/trabajo/logos',
      '/trabajo/campanas',
      '404'
    ]
  }
}
