<template>
  <div class="keyboard">
    <h1>KEYBOARD SHORTCUTS</h1>
    <div>
      <h2>MAIN PRINCIPLE</h2>
      <p><b>LETTER (+ AXE) + VALUE + ENTER</b></p>
      <p>The <b>LETTER</b> correspond to the parameter you want to modify.</p>
      <p>You select an <b>AXE</b> <b>X</b>, <b>Y</b> or <b>Z</b> (not in every command, default is <b>X</b>).</p>
      <p>The <b>VALUE</b> is a number you can choose with your numeric pad.</p>
      <p>And then press <b>ENTER</b> to apply.</p>
    </div>
    <div>
      <h2>KEYS</h2>
      <p><b>P</b> position movement of the cubes</p>
      <p><b>R</b> rotation speed of the cubes</p>
      <p><b>S</b> dimentions of the -cubes- (Scale)</p>
      <p><b>A</b> amplitude of the position movement</p>
      <p><b>C</b> color intensity</p>
      <p><b>M</b> organisation mode -1- Wall (default) -2- Ground -3- Tunnel</p>
      <p><b>T</b> time scale (example : 0.1 slow | 1 normal | 2 fast)</p>
      <p><b>I</b> set all the parameters to theirs initial values</p>
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap'

  export default {
    name: 'keyboard',
    components: {
    },
    mounted: () => { // Animation when keyboard's instructions are displayed
      gsap.from('.keyboard', {opacity: '0', lineHeight: '0em'})
      gsap.to('.keyboard', {opacity: '1', lineHeight: '1.5em', duration: '0.5s', ease: "sin.in"})
    },
    updated: () => {
    },
    destroyed: () => {
    }
  }
</script>

<style lang="stylus">
.keyboard
  text-align center
  line-height 1.5em
  // transform translate(-50%, -50%)
  letter-spacing 0.2em
  font-family arial
  overflow hidden
  margin 20%
  margin-top 150px
  min-width 600px
  @media screen and (max-width:800px)
    line-height 1.1em
    min-width 400px
  h1
    font-size 15px
    border-bottom 0
  h2
    font-size 15px
    letter-spacing 1.05em
    padding 10px 5px
    border-top 1px solid #FFF3
    margin:10px 0px
  p
    text-align left
  #nav
    letter-spacing 0.9em
  a
    font-size 14px
</style>