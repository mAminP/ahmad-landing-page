<template>
  <kinesis-container class="bg text-center">
    <kinesis-element
      :strength="4"
      transform-origin="10% 20%"
    >
      <div class="circle circle-purple" />
    </kinesis-element>
    <kinesis-element :strength="10">
      <div class="circle circle-purple1" />
    </kinesis-element>

    <kinesis-element :strength="27">
      <div class="circle circle-purple2" />
    </kinesis-element>
    <kinesis-element :strength="18">
      <div class="circle circle-purple3" />
    </kinesis-element>
    <kinesis-element type="depth_inv" :strength="7">
      <v-row justify="center" align="start">
        <v-col class="white--text" order-lg="2" cols="12" lg="4">
          <kinesis-container event="scroll">
            <kinesis-element :strength="70" axis="y">
              <h2 class="font-aviny">
                اسم برنامه
              </h2>
            </kinesis-element>
            <kinesis-element :strength="80" axis="y">
              <p class="font-iranYekanWebRegular text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام استفاده قرار گیرد.
              </p>
            </kinesis-element>
            <kinesis-element :strength="90" axis="y">
              <v-btn class="font-iranYekanWebRegular" large="" outlined="" color="white">
                <v-icon left="">
                  mdi-download
                </v-icon>
                <span>دریافت</span>
              </v-btn>
            </kinesis-element>
          </kinesis-container>
        </v-col>

        <v-col order-lg="1" cols="12" lg="2" offset="1">
          <img src="~/assets/Images/1 (5).png" alt="logrocket logo">
        </v-col>
      </v-row>
    </kinesis-element>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,80C480,107,600,181,720,224C840,267,960,277,1080,245.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
    </svg>
  </kinesis-container>
</template>

<script>
export default {

}
</script>

<style scoped>
svg{
  position: absolute;
  bottom: -10px;
  right: 0;
  left: 0;
  z-index: -10;
}
.bg {
background: rgb(2,0,36);
background: linear-gradient(128deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 31%, rgba(0,212,255,1) 100%);
   padding: 5rem 0 2rem 0;
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
  left: 10vh;
  top: 10vh;
}

.circle.circle-purple1 {
  border: 50px solid #f2eafa;
  opacity: 0.1;
  width: 10vw;
  height: 10vw;
  right: -5vh;
  top: -20vh;

}
.circle.circle-purple2 {
  background-color: #f2eafa;
  opacity: 0.1;
  width: 8vw;
  height: 8vw;
  right: 90vh;
  top: 30vh;
}

.circle.circle-purple3 {
  border: 15px solid #f2eafa;
  opacity: 0.2;
  width: 7vw;
  height: 7vw;
  left: 60vh;
  top: 1.5vh;
}
img {
  width: 22rem;
}
h2{
  font-size: 2.1em;
}
</style>
