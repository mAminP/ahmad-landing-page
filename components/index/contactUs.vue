<template>
  <v-container>
    <v-row
      align="start"
      justify="start"
    >
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-row no-gutters="" align="center" justify="space-between">
          <h2 v-text="contactUs.title" />
          <v-btn depressed="" color="grey" large="" dark="" @click="dialog = true">
            <v-icon left="">
              mdi-email-variant
            </v-icon>

            ارسال تیکت
          </v-btn>
        </v-row>
        <p class="text-justify" v-text="contactUs.paragraph" />
        <v-row v-for="(way, index) in contactUs.ways" :key="index" no-gutters="" align="center" justify="start">
          <p v-text="way" />
        </v-row>
      </v-col>
      <v-col
        class="hidden-sm-and-down text-center"
        cols="12"
        lg="5"
        md="5"
        sm="12"
        align-self="center"
      >
        <v-row align="center" justify="center">
          <v-col v-for="(svg,index) in contactUs.svgs" :key="index" cols="3">
            <v-img aspect-ratio="1" eager="" :src="svg" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-row align="center" no-gutters="">
          <v-col>
            <v-btn color="red darken-1" icon="" @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-card-text>
          <span>ارسال تیکت</span>
        </v-card-text>
        <v-card-text>
          <Cform />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Cform from '@/components/index/form'
export default {
  components: {
    Cform
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    contactUs () {
      return this.$store.getters.contactUs
    }
  }
}
</script>

<style scoped>
h2 {
    font-size: 2.5em !important;
}
</style>
