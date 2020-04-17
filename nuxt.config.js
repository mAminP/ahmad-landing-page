import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'هوبو شاپ' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'با توجه به سیر صعودی و پیشرفت روزافزون فناوری اطلاعات در دنیا که همه ی جهان معاصررا تحت تاثیر خود قرار داده است و صنعت و تجارت هم ازاین قاعده مستثنی نیست امروزه هر فروشگاهی درتلاش برای به کارگیری ازاین فناوری وخدمات منحصربه فردآن درروندتوسعه کسب وکار خود است. هوبوشاب نیز درامر تحقق واراعه خدمات بستری رافراهم کرده است تاهم فروشگاها بتوانند محصولات خود را عرضه نمایندوهم مردم بتوانندبا حداقل زمان وکمترین هزینه از ویترین فروشگاهها دیدن کنند و بهترین و مناسب ترین انتخاب خود را داشته باشند. هدف اصلی ما دیده شدن فروشگاهها و صرفه جویی در وقت هزینه ی مردم عزیزو گرانقدر است.با هوبوشاپ سرعت ،کیفیت،امنیت و صرفه جویی در زمان را تجربه کنید' || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/kinesis', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    rtl: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
