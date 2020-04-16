<template>
  <v-container>
    <v-row no-gutters="">
      <h2 v-text="topFeatures.title" />
    </v-row>
    <v-row no-gutters="" align="start" justify="start">
      <v-col cols="12" lg="4" md="4" sm="12">
        <p class="pl-lg-3 text-justify" v-text="topFeatures.paragraph" />
      </v-col>
      <v-col cols="12" lg="8" md="8" sm="12">
        <kinesis-container event="scroll">
          <kinesis-element
            :strength="60"
            axis="y"
          >
            <v-row class="px-3">
              <v-col
                v-for="(card,index) in topFeatures.cards"
                :key="index"
                cols="12"
                lg="6"
                md="12"
                sm="6"
              >
                <v-card>
                  <v-row no-gutters="" align="center">
                    <v-icon x-large="" class="mx-5">
                      mdi-plus
                    </v-icon>
                    <v-col>
                      <h3 class="pr-3 pt-2" v-text="card.title" />
                      <v-card-text class="pt-1 text-justify" v-text="card.text" />
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
