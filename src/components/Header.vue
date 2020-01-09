<template>
  <header :class="config">
    <h1 @click="displayHome">
      Online Cube V-ging
    </h1>
    <div id="nav">
      <router-link to="/keyboard" :event="''" @click.native.prevent="displayKey">Keyboard</router-link> | 
      <router-link to="/galery" :event="''" @click.native.prevent="displayGalery">Galery</router-link> | 
      <router-link to="/vging" :event="''" @click.native.prevent="displayVging">Vging mode</router-link>
    </div>
  </header>
</template>

<script>
  import gsap from 'gsap'
  import router from '../router/'

  export default {
    name: 'Header',
    components: {},
    data: function () {
      return {
        config: 'home'
      }
    },
    mounted: function() { // Animation at the arrival on the website
      gsap.from("header", {opacity: '0', top: '50%', fontSize: '12px'})
      gsap.to("header", {opacity: '1', top: '50%', fontSize: '12px', duration:1, ease: "sin.in"})
      gsap.to("h1", {fontSize: '50px', duration:1, ease: "sin.in"})
      router.push({ path: '/' })
    },
    computed: {
    },
    methods: { // Methods to animate the route switching
      displayHome() {
        gsap.to("header", {opacity: '1', top: '50%', fontSize: '12px', ease: "sin.in"})
        gsap.to("h1", {fontSize: '50px', ease: "sin.in"})
        router.push({ path: '/' })
      },
      displayKey() {
        gsap.to("header", {opacity: '1', top: '7%', ease: "sin.in"})
        gsap.to("h1", {fontSize: '15px', ease: "sin.in"})
        router.push({ path: '/keyboard' })
      },
      displayGalery() {
        gsap.to("header", {opacity: '1', top: '7%', ease: "sin.in"})
        gsap.to("h1", {fontSize: '15px', ease: "sin.in"})
        router.push({ path: '/galery' })
      },
      displayVging() {
        gsap.to("header", {opacity: '0.3', top: '5%', fontSize: '12px', ease: "sin.in"})
        gsap.to("h1", {fontSize: '10px', ease: "sin.in"})
        router.push({ path: '/vging' })
      }
    }
  }
</script>


<style lang="stylus">
header
  position fixed
  overflow hidden
h1
  text-transform uppercase
  font-family arial
  font-size 40px
  letter-spacing 1.2em
  padding 20px
  border-bottom 1px solid white
  text-shadow -2px 0 black, 0 2px black
  cursor pointer
  @media screen and (max-width:800px)
    letter-spacing 0.5em
#nav
  letter-spacing 1.05em
  font-family arial
  text-transform uppercase
  @media screen and (max-width:800px)
    letter-spacing 0.5em
    width 500px
  a
    color white
    text-decoration none
    font-size 10px
    padding 10px
    display inline-block
    text-shadow -2px 0 black, 0 2px black
</style>
