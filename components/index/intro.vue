<template>
  <kinesis-container class="bg text-center">
    <kinesis-element
      :strength="isMobile ? 50 : 4"
    >
      <div class="circle circle-purple" />
    </kinesis-element>
    <kinesis-element :strength="isMobile ? -20 : -10">
      <div class="circle circle-purple1" />
    </kinesis-element>

    <kinesis-element :strength="isMobile ? 56 :27">
      <div class="circle circle-purple2" />
    </kinesis-element>
    <kinesis-element :strength="isMobile ? 32 :18">
      <div class="circle circle-purple3" />
    </kinesis-element>
    <kinesis-element :strength="isMobile ? -40 :-20">
      <div class="circle circle-purple4" />
    </kinesis-element>
    <kinesis-element :strength="isMobile ? -25 :-20">
      <div class="circle circle-purple5" />
    </kinesis-element>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,80C480,107,600,181,720,224C840,267,960,277,1080,245.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
    </svg>
    <v-row justify="center" align="start" class="to-top">
      <v-col
        class="white--text my-3"
        order-lg="2"
        order-md="2"
        cols="10"
        sm="8"
        md="6"
        lg="4"
      >
        <kinesis-element transform-origin="50% 50%" type="depth" :strength="isMobile ? 3 :5">
          <kinesis-container event="scroll">
            <kinesis-element :strength="50" axis="y">
              <h2 v-text="intro.title" />
            </kinesis-element>
            <kinesis-element :strength="70" axis="y">
              <p class="text-justify" v-text="intro.paragraph" />
            </kinesis-element>
            <kinesis-element :strength="80" axis="y">
              <v-btn class="font-iranYekanWebRegular" large="" outlined="" color="white">
                <v-icon left="">
                  mdi-download
                </v-icon>
                <span>دریافت</span>
              </v-btn>
            </kinesis-element>
          </kinesis-container>
        </kinesis-element>
      </v-col>

      <v-col
        order-lg="1"
        order-md="1"
        cols="9"
        sm="6"
        lg="3"
        md="4"
        offset-lg="1"
      >
        <kinesis-element type="depth" transform-origin="50% 50%" :strength="isMobile ? 8 :5">
          <v-img eager :src="intro.image" />
        </kinesis-element>
      </v-col>
    </v-row>
  </kinesis-container>
</template>

<script>
export default {
  data: () => ({
    isMobile: false
  }),
  computed: {
    intro () {
      return this.$store.getters.intro
    }
  },

  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 960
    }
  }

}
</script>

<style scoped>
svg{
  position: absolute;
  bottom: -10px;
  right: 0;
  left: 0;
}
.bg {
background: rgb(2,0,36);
background: linear-gradient(128deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 31%, rgba(0,212,255,1) 100%);
   padding: 5rem 0 2rem 0;
   position: relative;
   overflow: hidden;

}

.circle {
  position: absolute;
  border-radius: 100%;

}

.circle.circle-purple {
  border: 5px solid #f2eafa;
  opacity: 0.2;
  width: 10vw;
  height: 10vw;
  top: 10vh;
  left: 5%;
}

.circle.circle-purple1 {
  border: 50px solid #f2eafa;
  opacity: 0.1;
  width: 10vw;
  height: 10vw;
  top: -20vh;
  right: 3%;

}
.circle.circle-purple2 {
  background-color: #f2eafa;
  opacity: 0.1;
  width: 8vw;
  height: 8vw;
  top: 30vh;
  right: 40%;
}

.circle.circle-purple3 {
  border: 15px solid #f2eafa;
  opacity: 0.2;
  width: 7vw;
  height: 7vw;
  top: 1.5vh;
  left: 31%;
}
.circle.circle-purple4 {
    background-color: #f2eafa;
  opacity: 0.2;
  width: 15vw;
  height: 15vw;
  top: 65vh;
  left: 20%;
}
.circle.circle-purple5 {
  border: 10px solid #f2eafa;
  opacity: 0.2;
  width: 25vw;
  height: 25vw;
  top: 70vh;
  left: 70%;
}
img {
  width: 22rem;
}
</style>
