<template>
  <div class="home">
    <heroComp />
    <div class="contenedor contenedor__bg">
      <saboresComp />
      <adornosComp />
    </div>
    <footerComp />
  </div>
</template>

<script>
// @ is an alias to /src
import heroComp from '@/components/home/landingPage/hero.vue'
import saboresComp from '@/components/home/landingPage/sabores.vue'
import adornosComp from '@/components/home/landingPage/adornos.vue'
import footerComp from '@/components/footer.vue'

export default {
  name: 'HomeView',
  components: {
    heroComp,
    saboresComp,
    adornosComp,
    footerComp
  }
}
</script>


