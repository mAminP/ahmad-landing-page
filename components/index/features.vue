<template>
  <v-row no-gutters="">
    <v-col cols="12">
      <kinesis-container event="scroll">
        <kinesis-element
          :strength="500"
          axis="y"
        >
          <div class="circle circle-purple2" />
        </kinesis-element>
        <kinesis-element
          :strength="-500"
          axis="y"
        >
          <div class="circle circle-purple3" />
        </kinesis-element>
        <feature v-for="feature in Features" :id="feature.id" :key="feature.title" :reverse="feature.reverse" :data="feature" />
      </kinesis-container>
    </v-col>
  </v-row>
</template>

<script>
import feature from '@/components/index/feature'

export default {
  components: {
    feature
  },
  computed: {
    Features () {
      return this.$store.getters.Features
    }
  }
}
</script>
<style scoped>
.circle {
  position: absolute;
  border-radius: 100%;
}
.circle.circle-purple2 {
  background-color: #e1f3ff;
  opacity: 0.2;
  width: 12vw;
  height: 12vw;
  right: -10vh;
  top: 50vh;
}
.circle.circle-purple3 {
  background-color: #6dffe8;
  opacity: 0.1;
  width: 12vw;
  height: 12vw;
  left: -10vh;
  top: 10vh;
}
</style>
