<template>
  <v-container>
    <v-row class="my-12" align="start" align-content="stretch" justify="center">
      <v-col
        v-for="(i,index) in moreFeatures"
        :key="index"
        align-self="stretch"
        cols="12"
        lg="4"
        md="4"
      >
        <kinesis-container event="scroll">
          <kinesis-element type="scale" :strength="-3">
            <v-card class="text-center" flat="">
              <v-row justify="center" align="center" no-gutters="">
                <v-col align-self="center" cols="3">
                  <v-img aspect-ratio="1" :src="i.svg" />
                </v-col>
              </v-row>
              <v-card-text class="text-justify" v-text="i.text" />
            </v-card>
          </kinesis-element>
        </kinesis-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    moreFeatures () {
      return this.$store.getters.moreFeatures
    }
  }
}
</script>

<style>

</style>
