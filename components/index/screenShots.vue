<template>
  <section class="scroll">
    <kinesis-container event="scroll">
      <div class="scroll__description">
        <rune :size="400" :parts="5" :top="0" :left="-450" />
        <rune :size="200" :parts="5" :top="10" :left="10" />
        <rune :size="50" :parts="5" :top="250" :left="20" />
        <rune :size="220" :parts="5" :top="50" :left="300" />
        <rune :size="100" :parts="5" :top="300" :left="200" />
        <rune :size="180" :parts="5" :top="300" :left="450" />
        <rune :size="80" :parts="5" :top="-5" :left="1050" />
        <rune :size="100" :parts="5" :top="250" :left="900" />
        <rune :size="150" :parts="5" :top="-20" :left="1350" />
        <rune :size="250" :parts="5" :top="-100" :left="700" />
        <rune :size="125" :parts="5" :top="200" :left="700" />
        <rune :size="300" :parts="5" :top="100" :left="1050" />
        <rune :size="200" :parts="5" :top="220" :left="1400" />
        <rune :size="150" :parts="5" :top="420" :left="950" />
        <rune :size="250" :parts="5" :top="400" :left="-100" />
        <v-row align="center" justify="center">
          <kinesis-container>
            <kinesis-element
              class="el"
              :strength="3"
              type="depth"
              transform-origin="50% 300%"
              axis="x"
            >
              <img width="300" src="~/assets/Images/1 (2).png" alt="logrocket logo">
            </kinesis-element>
            <kinesis-element
              class="el"
              :strength="8"
              axis="x"
              type="rotate"
              transform-origin="50% 300%"
            >
              <img width="300" src="~/assets/Images/1 (4).png" alt="logrocket logo">
            </kinesis-element>
            <kinesis-element
              class="el"
              :strength="5"
              axis="x"
              type="rotate"
              transform-origin="50% 300%"
            >
              <img width="300" src="~/assets/Images/1 (3).png" alt="logrocket logo">
            </kinesis-element>
            <kinesis-element
              class="el"
              :strength="-8"
              axis="x"
              type="rotate"
              transform-origin="50% 300%"
            >
              <img width="300" src="~/assets/Images/1 (4).png" alt="logrocket logo">
            </kinesis-element>
            <kinesis-element
              class="el"
              :strength="-5"
              axis="x"
              type="rotate"
              transform-origin="50% 300%"
            >
              <img width="300" src="~/assets/Images/1 (3).png" alt="logrocket logo">
            </kinesis-element>
          </kinesis-container>
        </v-row>
      </div>
    </kinesis-container>
  </section>
</template>

<script>
import Rune from '@/components//index/rune'

export default {
  components: {
    Rune
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.el:first-child{
  position: relative;
  z-index: 15;

}
.el{
  position: absolute;
  top: 0;
  user-select: none;
}
.scroll {
  width: 100%;
  position: relative;
  background-color:rgba(236, 240, 241,1.0);
  text-align: center;
  overflow: hidden;
}
.scroll__description {
  display: table;
  margin: auto;
  padding: 2rem 0;
}
.scroll__description h2 {
  position: relative;
  background-color: transparent;
  color: #8e8e8e;
  z-index: 50;
}

</style>
