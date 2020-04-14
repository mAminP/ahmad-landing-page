<template>
  <v-container>
    <v-row class="my-12">
      <v-col v-for="i in 3" :key="i">
        <kinesis-container event="scroll">
          <kinesis-element type="scale" :strength="-2">
            <v-card class="text-center" flat="">
              <v-icon x-large="">
                mdi-plus
              </v-icon>
              <v-card-text class="text-justify font-iranYekanWebRegular">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که شامل حروفچینی گیرد.
              </v-card-text>
            </v-card>
          </kinesis-element>
        </kinesis-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
