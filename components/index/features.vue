<template>
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
    <feature />
    <feature reverse />
  </kinesis-container>
</template>

<script>
import feature from '@/components/index/feature'

export default {
  components: {
    feature
  }
}
</script>
<style scoped>
.circle {
  position: absolute;
  border-radius: 100%;
}
.circle.circle-purple2 {
  background-color: rgba(254, 227, 229,0.5);
  width: 12vw;
  height: 12vw;
  right: -10vh;
  top: 50vh;
}
.circle.circle-purple3 {
  background-color: rgba(200, 226, 251,0.5);
  width: 12vw;
  height: 12vw;
  left: -10vh;
  top: 10vh;
}
</style>
