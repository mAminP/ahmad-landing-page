<template>
  <v-container id="features">
    <v-row no-gutters="">
      <h2 v-text="topFeatures.title" />
    </v-row>
    <v-row no-gutters="" align="start" justify="start">
      <v-col cols="12" lg="4" md="5" sm="12">
        <p class="pl-lg-3 text-justify" v-text="topFeatures.paragraph" />
      </v-col>
      <v-col cols="12" lg="8" md="7" sm="12">
        <kinesis-container event="scroll">
          <kinesis-element
            :strength="60"
            axis="y"
          >
            <v-row class="px-3" align="stretch" justify="center">
              <v-col
                v-for="(card,index) in topFeatures.cards"
                :key="index"
                align-self="stretch"
                cols="12"
                lg="6"
                md="12"
                sm="6"
              >
                <v-card flat="" class="fill-height">
                  <v-row no-gutters="" align="center">
                    <v-col
                      align-self="center"
                      class="pa-2"
                      cols="3"
                      lg="3"
                      md="2"
                      sm="3"
                    >
                      <v-img aspect-ratio="1" :src="card.svg" />
                    </v-col>
                    <v-col align-self="center">
                      <h3 class="pr-3 pt-2" v-text="card.title" />
                      <v-card-text class="pt-1" v-text="card.text" />
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </kinesis-element>
        </kinesis-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    topFeatures () {
      return this.$store.getters.topFeatures
    }
  }
}
</script>

<style>

</style>
