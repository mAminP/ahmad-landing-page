<template>
  <v-container>
    <v-row align="center">
      <v-col offset="" :order="reverse ? 2 : 1">
        <h2 class="font-aviny">
          عنوان
        </h2>
        <p class="text-justify font-iranYekanWebRegular">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </v-col>
      <v-col :order="reverse ? 1 : 2">
        <kinesis-container event="scroll">
          <kinesis-element
            :strength="reverse ? -50 : 50"
            axis="x"
            class="text-center"
          >
            <img width="300" src="http://uupload.ir/files/hfdw_1_(1).png" alt="">
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
    }
  }
}
</script>

<style scoped>
h2 {
    font-size: 3em;
}
</style>
