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
          <v-toolbar-title>
            <h3>
              {{ title }}
            </h3>
          </v-toolbar-title>

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

    <v-footer dark="">
      <v-container class="pt-0">
        <v-row class="mt-n12">
          <v-sheet height="300" width="100%" elevation="12">
            <v-row no-gutters="" align="center" justify="center" class="fill-height">
              فوتر
            </v-row>
          </v-sheet>
        </v-row>
        <v-row class="mt-4" align="center" justify="center">
          <span>
            طراحی شده با ❤️ توسط محمد امین پاسبان
          </span>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'هوبو شاپ',
      items: [
        {
          id: 'features',
          text: 'ویژگی ها'
        },
        {
          id: 'moshtari',
          text: ' مشتری'
        },
        {
          id: 'froshande',
          text: 'فروشنده'
        },
        {
          id: 'contact-us',
          text: 'تماس با ما'
        }
      ]
    }
  }
}
</script>
<style scoped>
.v-footer{
background: rgb(2,0,36);
background: linear-gradient(0deg, #2c3e50 0%,#34495e 100%);

}
</style>
