<template>
    <navComp />
    <div class="adornos">
        <adornosAll />
    </div>
    <footerComp />
</template>

<script>
import adornosAll from '@/components/home/adornos/adornosAll.vue'
import navComp from '@/components/home/nav.vue'
import footerComp from '@/components/footer.vue'

export default {
    name: "adornosView",
    components: {
        footerComp,
        navComp,
        adornosAll
    },
}
</script>