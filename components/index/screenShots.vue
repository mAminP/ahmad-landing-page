<template>
  <section class="scroll">
    <v-container>
      <v-row no-gutters="">
        <v-col cols="12" class="gotop">
          <h2> تصاویری از محیط نرم افزار </h2>
        </v-col>
      </v-row>
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
            <v-col
              v-for="(item,index) in screenShots"
              :key="index"
              cols="6"
              lg="3"
              md="3"
              sm="4"
            >
              <kinesis-container>
                <kinesis-element
                  :class="index===3 ? 'd-block d-sm-none d-md-block d-lg-block d-xl-block': ''"
                  :strength="item.strength"
                  :type="item.type"
                  :transform-origin="item.transformorigin"
                  :axis="item.axis"
                >
                  <v-img eager="" :src="item.image" />
                </kinesis-element>
              </kinesis-container>
            </v-col>
          </v-row>
        </div>
      </kinesis-container>
    </v-container>
  </section>
</template>

<script>
import Rune from '@/components//index/rune'

export default {
  components: {
    Rune
  },
  computed: {
    screenShots () {
      return this.$store.getters.screenShots
    }
  }
}
</script>
<style scoped>
.gotop{
z-index: 100 !important;
}
.scroll {
  position: relative;
  background-color:rgb(245, 251, 255);
  overflow: hidden;
}
.scroll__description {
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
