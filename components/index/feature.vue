<template>
  <v-container>
    <v-row align="center">
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="6"
        offset=""
        :order="reverse ? 2 : 1"
      >
        <h2 v-text="data.title" />
        <p class="text-justify" v-text="data.paragraph" />
      </v-col>
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="6"
        class="d-none d-sm-block d-md-block d-lg-block"
        :order="reverse ? 1 : 2"
      >
        <kinesis-container event="scroll">
          <kinesis-element
            :strength="reverse ? -50 : 50"
            axis="x"
            class="text-center"
          >
            <v-img eager :src="data.image" />
          </kinesis-element>
        </kinesis-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean
    },
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h2 {
    font-size: 3em;
}
</style>
