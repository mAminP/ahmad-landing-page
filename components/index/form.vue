<template>
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

<style>

</style>
