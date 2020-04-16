<template>
  <v-content>
    <v-row no-gutters="">
      <v-col cols="12">
        <intro />
      </v-col>
      <v-col cols="12">
        <topFeatures />
      </v-col>
      <v-col cols="12">
        <features />
      </v-col>
      <v-col cols="12">
        <screenShots />
      </v-col>
      <v-col cols="12">
        <more-features />
      </v-col>
      <v-col cols="12">
        <!-- <contact-us /> -->
        <parallex />
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import intro from '@/components/index/intro'
import screenShots from '@/components/index/screenShots'
import features from '@/components/index/features'
import moreFeatures from '@/components/index/moreFeatures'
import contactUs from '@/components/index/contactUs'
import topFeatures from '@/components/index/topFeatures'
import parallex from '@/components/index/parallax'

export default {
  components: {
    intro,
    screenShots,
    features,
    moreFeatures,
    contactUs,
    topFeatures,
    parallex
  }
}
</script>

<style>

</style>
