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
import heroComp from '@/components/hero.vue'
import saboresComp from '@/components/sabores.vue'
import adornosComp from '@/components/adornos.vue'
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


