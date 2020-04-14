<template>
  <v-parallax
    dark
    src="https://www.kciteam.com/wp-content/uploads/2017/02/contact-form-background-2.jpg"
  >
    <v-container>
      <v-row
        align="start"
        justify="start"
      >
        <v-col class="">
          <h2 class="font-aviny">
            تماس با ما
          </h2>
          <p class="text-justify font-iranYekanWebRegular">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که شامل حروفچینی گیرد.
          </p>
          <p class="text-justify font-iranYekanWebRegular">
            شماره تماس : 09101234567
          </p>
          <p class="text-justify font-iranYekanWebRegular">
            ایمیل : email@domain.com
          </p>
        </v-col>
        <v-col class="text-center">
          <v-card class="pa-3" color="rgba(255,255,255,0.85)" flat="">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row no-gutters="">
                <v-col class="mx-1">
                  <v-text-field
                    v-model="name"
                    outlined=""
                    :rules="nameRules"
                    label="نام و نام خانوادگی"
                    required
                  />
                </v-col>
                <v-col class="mx-1">
                  <v-text-field
                    v-model="email"
                    outlined=""
                    :rules="emailRules"
                    label="شماره موبایل"
                    required
                  />
                </v-col>
              </v-row>

              <v-row no-gutters="">
                <v-col class="mx-1">
                  <v-text-field
                    v-model="name"
                    outlined=""
                    :rules="nameRules"
                    label="موضوع"
                    required
                  />
                </v-col>
              </v-row>
              <v-row no-gutters="">
                <v-col class="mx-1">
                  <v-textarea
                    v-model="name"
                    outlined=""
                    height="120"
                    :rules="nameRules"
                    label="متن پیام"
                    required
                  />
                </v-col>
              </v-row>
              <v-btn
                :disabled="!valid"
                color="success"
                block=""
                class="mx-1"
                outlined=""
                @click="validate"
              >
                ارسال
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }

}
</script>

<style scoped>
h2 {
    font-size: 2.5em !important;
}
</style>
