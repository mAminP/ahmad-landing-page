<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-row align="center" justify="center">
      <v-col cols="12">
        <span>ارسال تیکت</span>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="6" class="py-1">
        <v-text-field
          v-model="formData.name"
          outlined=""
          :rules="nameRules"
          label="نام و نام خانوادگی"
          required
          dense=""
          :disabled="loading"
        />
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="6" class="py-1">
        <v-text-field
          v-model="formData.phone"
          outlined=""
          dense=""
          :rules="phoneNumberRules"
          label="شماره موبایل"
          required
          :disabled="loading"
        />
      </v-col>
      <v-col cols="12" class="py-1">
        <v-text-field
          v-model="formData.subject"
          outlined=""
          dense=""
          :disabled="loading"
          :rules="SubjectRules"
          label="موضوع"
          required
        />
      </v-col>
      <v-col cols="12" class="py-1">
        <v-textarea
          v-model="formData.text"
          dense=""
          outlined=""
          :disabled="loading"
          :rules="textRules"
          label="متن پیام"
          required
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="end" no-gutters="">
      <v-btn
        :disabled="!valid || loading"
        :loading="loading"
        color="success"
        class="mx-1"
        depressed=""
        @click="validate"
      >
        <v-icon left="">
          mdi-email-send-outline
        </v-icon>
        ارسال
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    loading: false,
    formData: {
      name: '',
      phone: '',
      subject: '',
      text: ''
    },
    nameRules: [
      v => !!v || 'لطفا نام و نام خانوادگی خود را وارد کنید'
    ],
    phoneNumberRules: [
      v => !!v || 'لطفا شماره موبایل خود را وارد کیند',
      v => /^()?09\d{9}$/g.test(v) || 'فرمت شماره موبایل وارد شده صحیح نمی‌باشد'
      // v => /^(\+98|0|98)?9\d{9}$/g.test(v) || 'فرمت شماره موبایل وارد شده صحیح نمی‌باشد'
    ],
    SubjectRules: [
      v => !!v || 'لطفا موضوع تیکت را وارد کنید'
    ],
    textRules: [
      v => !!v || 'لطفا پیام خود را وارد کنید'
    ]
  }),
  methods: {
    async validate () {
      if (this.$refs.form.validate()) {
        this.loading = true
        return await this.$store.dispatch('sendMessage', this.formData).then(
          () => {
            this.$nuxt.$emit('snackBar', { text: 'پیام شما با موفقیت ارسال شد .', color: 'success' })
            this.$nuxt.$emit('closeDialog')
          }
        ).catch(
          (e) => {
            this.$nuxt.$emit('snackBar', { text: 'متاسفانه پیام ارسال نشد . لطفا مجددا امتحان نمایید .', color: 'error' })
          }
        ).finally(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>

<style>

</style>
