<template>
    <navComp />
    <div class="adornos">
        <adornosAll />
    </div>
    <footerComp />
</template>

<script>
import adornosAll from '@/components/adornos/adornosAll.vue'
import navComp from '@/components/nav.vue'
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