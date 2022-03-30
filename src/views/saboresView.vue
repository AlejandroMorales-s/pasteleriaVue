<template>
    <navComp />
    <div class="sabores">
        <saboresAll />
    </div>
    <footerComp />
</template>
<script>
import saboresAll from '@/components/home/sabores/saboresAll.vue'
import navComp from '@/components/home/nav.vue'
import footerComp from '@/components/footer.vue'

export default {
    name: "saboresView",
    components: {
        saboresAll,
        navComp,
        footerComp
    },
}
</script>