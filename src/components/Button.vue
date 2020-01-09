<template>
  <div id="btn">
    {{label}}
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Button',
    components: {
    },
    props: ['label'],
    methods: {
      ...mapActions([
        
      ])
    }
  }
</script>


<style lang="stylus">
#btn
  letter-spacing 1.05em
  font-family arial
  text-transform uppercase
  color white
  text-decoration none
  padding 10px
  display inline-block
  transition 0.5s
  text-shadow -2px 0 black, 0 2px black
  font-weight bold
  font-size 1.2em
  border-radius 5px
  border 1px solid white
  text-align center
</style>
