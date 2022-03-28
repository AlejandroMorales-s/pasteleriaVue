<template>
    <preguntasComp />
    <saboresMix />
    <adornosMix />
</template>

<script>
import preguntasComp from '@/components/preguntas.vue'
import saboresMix from '@/components/saboresMix.vue'
import adornosMix from '@/components/adornosMix.vue'

export default {
    name: "formComp",
    components: {
        preguntasComp,
        saboresMix,
        adornosMix,
    }
}  
</script>
