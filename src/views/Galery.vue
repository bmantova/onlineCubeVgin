<template>
  <div class="galery">
    <h1>GALERY</h1>
    <div class="content">
      <div class="img" v-for="(im) in imgs" :key="im" >
        <img :src="im" @click="displayImg(im)"/>
      </div>
    </div>
    <div id="bigimg" @click="hideImg()">
      <img :src="bigimgSrc"/>
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap'

  export default {
    name: 'galery',
    components: {
    },
    data: function () {
      return {
        imgs: [],
        bigimgSrc: ''
      }
    },
    created: function () {
      for(let i = 1;i <= 8;i++) this.imgs.push('./img/'+i+'.png') // Add images for the galery
    },
    methods: {
      displayImg(src) {
        this.bigimgSrc = src // Change the src of the big image
        gsap.to('#bigimg', {width: '100%', left: '0%', top: '0%'}) // And then display the image
      },
      hideImg() {
        gsap.to('#bigimg', {width: '0%', left: '50%', top: '50%'}) // Hide the image
      }
    },
    mounted: () => { // Animation when galery is displayed
      gsap.from('.galery', { height: '0%', opacity: '0'})
      gsap.to('.galery', {opacity: '1', height: '', duration: 1, ease: "sin.in"})
      gsap.from('img', {opacity: '0'})
      gsap.to('img', {opacity: '1', duration: 1, ease: "sin.in"})
      gsap.to('#bigimg', {width: '0%', left: '50%', top: '50%'})
    }
  }
</script>


<style lang="stylus">
.galery
  position fixed
  text-align center
  line-height 1.5em
  letter-spacing 0.2em
  font-family arial
  overflow hidden
  margin 10%
  margin-top 100px
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
  #bigimg
    position fixed
    height 100%
    width 0%
    left 50%
    top 50%
    img
      width 80%
      margin auto
      margin-top 2%
  .content
    width 100%
    text-align center
    margin auto
    .img
      display inline-block
      vertical-align middle
      opacity 0.7
      transition 0.5s
      &:hover
        opacity 1
        img
          width 300px
          @media screen and (max-width:800px)
            width 220px
      img
        width 280px
        z-index 1
        cursor pointer
        transition 0.5s
        @media screen and (max-width:800px)
          width 200px
</style>
