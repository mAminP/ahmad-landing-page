<template>
  <v-container>
    <v-row class="my-12" align="center" justify="center">
      <v-col v-for="(i,index) in moreFeatures" :key="index" cols="12" lg="4" md="4">
        <kinesis-container event="scroll">
          <kinesis-element type="scale" :strength="-3">
            <v-card class="text-center" flat="">
              <v-icon x-large="">
                mdi-plus
              </v-icon>
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
