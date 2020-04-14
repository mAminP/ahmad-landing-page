<template>
  <kinesis-container event="scroll">
    <kinesis-element
      :strength="600"
      axis="y"
    >
      <div class="circle circle-purple2" />
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
  background-color: rgba(2,0,36,.02);
  width: 12vw;
  height: 12vw;
  right: -10vh;
  top: 50vh;
}

</style>
