<template>
  <v-container class="my-8">
    <v-row no-gutters="">
      <h2>ویژگی ها</h2>
    </v-row>
    <v-row no-gutters="" align="start" justify="center">
      <v-col cols="4">
        <p class="pl-3 text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
        </p>
      </v-col>
      <v-col cols="8">
        <v-row class="px-3">
          <v-col v-for="i in 4" :key="i" cols="6">
            <v-card>
              <v-row no-gutters="" align="center">
                <v-icon x-large="" class="mx-5">
                  mdi-plus
                </v-icon>
                <v-col>
                  <h3 class="pr-3 pt-2">
                    تایتل
                  </h3>
                  <v-card-text class="pt-1 text-justify">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهو احان گرافیک است. چاپگرها ستون
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
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
