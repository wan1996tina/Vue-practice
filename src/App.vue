<template lang="pug">
  #app
    Top
    Marquee
    Content
    Footer
</template>

<script>
import Top from './components/Top.vue'
import Marquee from './components/Marquee'
import Content from './components/Content'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Top,
    Marquee,
    Content,
    Footer
  }
}
</script>
