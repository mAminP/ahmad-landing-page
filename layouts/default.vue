<template>
  <v-app>
    <!-- <v-app-bar
      flat=""
      color="transparent"
      app=""
    >
      <v-toolbar-title v-text="title" />
    </v-app-bar> -->
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
      title: 'احمد'
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
