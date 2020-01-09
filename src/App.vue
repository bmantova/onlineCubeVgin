<template>
  <div id="app">
    <MainCanvas/>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainCanvas from '@/components/mainCanvas/MainCanvas.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    MainCanvas,
    Header
  }
}
</script>

<style lang="stylus">
*
  padding 0
  margin 0
html, body
  overflow hidden
#app
  color white
  position fixed
  text-align center
  width 100%
canvas
  width 100%
</style>
