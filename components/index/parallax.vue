<template>
  <section id="contact-us" class="parallax">
    <div class="parallax__container">
      <section>
        <contactUs />
      </section>
      <kinesis-container event="scroll">
        <div class="parallax__content">
          <kinesis-element
            tag="div"
            :strength="500"
            class="parallax__background"
          />
        </div>
      </kinesis-container>
    </div>
  </section>
</template>
<script>
import contactUs from '@/components/index/contactUs'
export default {
  components: {
    contactUs
  }
}
</script>
<style scoped>
.parallax {
  width: 100%;
  position: relative;
  padding: 50px 0;
}
.parallax__container {
  height: 50ex;
  position: relative;
  overflow: hidden;
}
.parallax__container:before,
.parallax__container:after {
  content: '';
  width: 100%;
  height: 20%;
  position: absolute;
  left: 0;
  z-index: 1;
}
.parallax__container:before {
  background: linear-gradient(to bottom, #fff, rgba(255,255,255,0));
  top: 0;
}
.parallax__container:after {
  background: linear-gradient(to top, #fff, rgba(255,255,255,0));
  bottom: 0;
}
.parallax__container > div {
  width: 100%;
  height: 100%;
}
.parallax__content {
  width: 100%;
  height: 200ex;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.parallax__background {
  height: 100%;
  background: linear-gradient(90deg, #fff 20px, transparent 1%) center, linear-gradient(#fff 20px, transparent 1%) center, rgba(9,9,121,0.3);
  background-size: 22px 22px;
}
.parallax section {
  position: relative;
  z-index: 50;
}

</style>
