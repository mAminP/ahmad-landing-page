<template>
  <kinesis-container
    event="scroll"
    class="rune"
    :duration="time()"
    :style="
      `width: ${size}px; height: ${size}px; top: ${top}px; left: ${left}px`
    "
  >
    <kinesis-element
      v-for="index in parts"
      :key="index"
      tag="span"
      :strength="strength()"
      type="rotate"
      :style="
        `width: ${scale(index)}px; height: ${scale(
          index
        )}px; box-shadow: inset 0 0 0 ${border()}px rgba(225, 243, 255,0.5); top: ${position(
          scale(index)
        )}px; left: ${position(scale(index))}px; z-index: ${parts - index};`
      "
    />
  </kinesis-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['size', 'parts', 'top', 'left'],
  methods: {
    time () {
      return Math.floor(Math.random() * 5000) + 1000
    },
    scale (index) {
      const percentage = this.size / this.parts
      return index * percentage
    },
    border () {
      return this.size / (this.parts * this.parts)
    },
    position (scale) {
      return this.size / 2 - scale / 2
    },
    strength () {
      return Math.floor(Math.random() * 500) + 100
    }
  }
}
</script>

<style scoped>
.rune {
  position: absolute;
}
.rune span {
  display: block;
  background-color:rgba(245, 251, 255,1.0);
  border-radius: 50%;
  position: absolute;
}
.rune span:before {
  content: '';
  width: 100%;
  height: 40%;
  background-color: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
