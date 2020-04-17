<template>
  <v-app>
    <v-app-bar
      flat=""
      color="transparent"
      dark=""
      absolute=""
    >
      <v-container>
        <v-row no-gutters="" align="center">
          <v-spacer />
          <v-btn v-for="item in items" :key="item.id" class="hidden-sm-and-down" text @click="$vuetify.goTo(`#${item.id}`)">
            {{ item.text }}
          </v-btn>
          <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                icon
                class="hidden-md-and-up"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="$vuetify.goTo(`#${item.id}`)"
              >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </v-container>
    </v-app-bar>
    <nuxt />

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="color"
    >
      {{ text }}
    </v-snackbar>
    <v-footer dark="">
      <v-container class="pt-0">
        <v-row class="mt-n12">
          <v-sheet height="300" width="100%" elevation="12">
            <v-row no-gutters="" align="center" justify="center" class="fill-height">
              فوتر
            </v-row>
          </v-sheet>
        </v-row>
        <v-row class="mt-3 text-center" align="center" no-gutters="" justify="center">
          <v-col cols="12" align-self="center">
            <p class="endspan ma-0 py-1">
              کلیه حقوق برای هوبوشاپ محفوظ است. <span>&copy; {{ new Date().getFullYear() }}</span>
            </p>
          </v-col>
          <v-col cols="12" align-self="center">
            <p class="endspan ma-0 py-1">
              طراحی شده با ❤️ توسط محمد امین پاسبان
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      snackbar: false,
      text: '',
      color: '',
      timeout: 2000,
      items: [
        {
          id: 'features',
          text: 'ویژگی ها'
        },
        {
          id: 'moshtari',
          text: 'کاربران'
        },
        {
          id: 'froshande',
          text: 'فروشندگان'
        },
        {
          id: 'contact-us',
          text: 'تماس با ما'
        }
      ]
    }
  },
  created () {
    this.$nuxt.$on('snackBar', (data) => {
      this.text = data.text
      this.color = data.color
      this.snackbar = true
    })
  }
}
</script>
<style scoped>
.v-footer{
background: rgb(2,0,36);
background: linear-gradient(0deg, #2c3e50 0%,#34495e 100%);

}
.endspan{
  font-size: 0.8em;
}
</style>
