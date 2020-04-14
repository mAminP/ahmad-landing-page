<template>
  <div>
    <intro />
    <features />
    <screenShots />
    <more-features />
    <contact-us />
  </div>
</template>

<script>
import intro from '@/components/index/intro'
import screenShots from '@/components/index/screenShots'
import features from '@/components/index/features'
import moreFeatures from '@/components/index/moreFeatures'
import contactUs from '@/components/index/contactUs'

export default {
  components: {
    intro,
    screenShots,
    features,
    moreFeatures,
    contactUs
  }
}
</script>

<style>

</style>
