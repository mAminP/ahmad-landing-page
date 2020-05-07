export const state = () => ({
  intro: {
    title: 'هوبو شاپ',
    link: 'https://hoboshopdl.ir/download_app/HoboShop.apk',
    paragraph: 'فرصتی برای دیده شدن کسب و کار شما',
    image: require('@/static/images/temp1.png')
  },
  topFeatures: {
    title: 'چرا هوبو شاپ ؟',
    paragraph: 'با توجه به سیر صعودی و پیشرفت روز افزون کاربرد فناوری اطلاعات در دنیا که همه ی جهان را تحت تاثیر خود قرار داده است . خرید و فروش هم ازاین قاعده مستثنی نبوده است ، امروزه هر فروشگاهی درتلاش برای به کارگیری ازاین فناوری وخدمات منحصربه فردآن در روند توسعه کسب وکار خود است. هوبوشاب نیز درامر تحقق واراعه خدمات بستری رافراهم کرده است تاهم فروشگاه ها بتوانند محصولات خود را در آن عرضه نمایند و هم مردم بتوانندبا حداقل زمان وکمترین هزینه از ویترین فروشگاهها دیدن کنند و بهترین و مناسب ترین انتخاب و خرید خود را داشته باشند. هدف اصلی ما در ابتدا دیده شدن فروشگاه ها و صرفه جویی در وقت و هزینه ی مردم عزیز و گرانقدر است و در آینده ای نزدیک خرید و فروش نیز از طریق نرم افزار هوبو شاپ  امکان پذیر خواهد یود ...',
    cards: [
      {
        title: 'سریع',
        text: ' سرعت بالای نرم افزار از ویژگی های اصلی هوبو شاپ است .',
        svg: require('@/static/images/clock.svg')
      },
      {
        title: 'امن',
        text: 'در هوبو شاپ از بروز ترین متد های امنیتی استفاده شده است .',
        svg: require('@/static/images/shield.svg')
      },
      {
        title: 'رایگان',
        text: 'کلیه ی خدمات اصلی هوبو شاپ به صورت رایگان ارائه می شود . ',
        svg: require('@/static/images/startup.svg')
      },
      {
        title: 'طراحی به روز',
        text: 'در طراحی هوبو شاپ سعی کرده‌ایم  تجربه ی کاربری دلنشینی را برای شما به ارمقان آوریم',
        svg: require('@/static/images/design.svg')
      }
    ]
  },
  Features: [
    {
      id: 'moshtari',
      title: 'کاربران',
      paragraph: 'تمام مردم عزیز کشور می توانند با ثبت نام در هوبو شاپ عضو این خانواده بزرگ شوند و از خدمات و مزایای این نرم افزار بهره مند شوند  مهم ترین این مزایا دسترسی آسان به همه ی فروشگاه های کشور  در کمترین زمان و باحداقل هزینه می باشد و دراین صورت  همه می توانند  کالای موردنظر خود را سریع تر و بهتر و مطمن تر انتخاب و خرید نمایند .',
      image: require('@/static/images/costomer.png'),
      reverse: false
    },
    {
      id: 'froshande',
      title: 'فروشندگان',
      paragraph: 'ما در هوبوشاپ سعی کرده ایم بستری را فراهم کنیم تا همه ی فروشگاه های کشورمان این امکان را داشته باشند با ثبت نام در این اپلیکیشن در ابتدا امکان معرفی فروشگاه و اشتراک گذاری  محصولات خود را در کشور یا شهر خود داشته باشند  و در آینده ای نزدیک بتوانند محصولات خود را به تمام کشور بفروشند و کسب و کار خود را رونق  ببخشند .',
      image: require('@/static/images/moshi.png'),
      reverse: true
    }
  ],
  screenShots: [
    {
      image: require('@/static/images/temp4.png'),
      strength: 5,
      type: 'depth',
      transformorigin: 'center',
      axis: ''
    },
    {
      image: require('@/static/images/temp2.png'),
      strength: 5,
      type: 'depth',
      transformorigin: 'center',
      axis: ''
    },
    {
      image: require('@/static/images/temp3.png'),
      strength: 5,
      type: 'depth',
      transformorigin: 'center',
      axis: ''
    },
    {
      image: require('@/static/images/temp2.png'),
      strength: 5,
      type: 'depth',
      transformorigin: 'center',
      axis: ''
    }
  ],
  moreFeatures: [
    {
      text: 'هوبوشاپ  در راستای خدمات رسانی به کاربران خود ( خریدار و فروشنده)و توسعه صنعت تجارت و خرید و فروش   به کارگیری  فاکتور های مهمی از جمله سرعت ،زمان ،دسترسی راحت و سریع و رابطه دوجانبه بین خریدارو فروشنده را مدنظر قرارداده و مهم تر از همه ی این موارد فروشگاه محوری بودن است که این برنامه را نسبت به برنامه های دیگر متمایز  کرده است اهداف این برنامه در موفقیت کسب کار ها و رضایت مصرف کنندگان خلاصه میشود ',
      svg: require('@/static/images/deal.svg')
    },
    {
      text: 'قابلیت جستجوی پیشرفته و مشاهده سریع محصولات ، این اپلیکیشن با استفاده از فیلتر های گوناگون امکان دسترسی سریع به یک فروشگاه خاص و یا دسترسی به محصول موردنظر فراهم کرده این فیلتر براساس فروشگاه و محصول طبقه بنذی شده و کاربران به راحتی می توانند لیست محصولات مرتبط با جستجوی خود را مشاهده و  به آن دسترسی داشته باشند',
      svg: require('@/static/images/target.svg')
    },
    {
      text: 'ثبت نام آسان و امکان به اشتراک گذاری اطلاعات فروشگاه ها یا محصولات در این اپلیکیشن این امکان را فراهم کرده است تا فروشگاه ها بتوانند از این بستر  برای توسعه ی کسب و کار خود کابران عزیز برای خرید بهتر و سریع تر استفاده کنند ',
      svg: require('@/static/images/organization.svg')
    }
  ],
  contactUs: {
    title: 'تماس با پشتیبانی',
    paragraph: 'شما می تواننید انتقادات ، پیشنهادات و یا مشکات را از طریق تیکت یا تماس با پشتیبانی با ما به اشتراک بگذارید . ',
    svgs: [
      require('@/static/images/time.svg'),
      require('@/static/images/customer-service.svg'),
      require('@/static/images/question.svg')
    ],

    ways: [
      'شماره پیامک : 30005006005340',
      'ایمیل : hoboshop.2020@gmail.com'
    ]
  }
})

export const actions = {
  async sendMessage (VuexContext, data) {
    return await new Promise((resolve, reject) => {
      return this.$axios.post('contact_us', data, {
        headers: {
          public_key: 'ngJP334ukr2Iyt6U7YFpLzrRqH7JgLyHtmE0j5yvmUlWaXCRz7ZwBnjS7Q8a7ltt5Jreyw28ntYhOIgwW6SH6qsdCDBkPRu9ZsDn'
        }
      }).then((res) => {
        resolve()
      }).catch((e) => {
        reject(e)
      }
      )
    })
  }
}

export const getters = {
  intro (state) {
    return state.intro
  },
  topFeatures (state) {
    return state.topFeatures
  },
  Features (state) {
    return state.Features
  },
  screenShots (state) {
    return state.screenShots
  },
  moreFeatures (state) {
    return state.moreFeatures
  },
  contactUs (state) {
    return state.contactUs
  }
}
