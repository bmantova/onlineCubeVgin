<template>
  <div class="MainCanvas">
  </div>
</template>

<script>
  import Webgl from './webgl/Webgl'

  export default {
    name: 'MainCanvas',
    mounted() {
      const webgl = new Webgl(document.body)

      window.addEventListener('mousemove', (e) => {
        webgl.updateMouse(e.clientX / window.innerWidth, e.clientY / window.innerHeight)
      })
    }
  }
</script>

<style lang="stylus">
canvas
  width 100%
</style>