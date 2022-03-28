<template>
    <preguntasComp />
    <saboresMix />
    <adornosMix />
</template>

<script>
import preguntasComp from '@/components/contacto/preguntas.vue'
import saboresMix from '@/components/contacto/saboresMix.vue'
import adornosMix from '@/components/contacto/adornosMix.vue'

export default {
    name: "formComp",
    components: {
        preguntasComp,
        saboresMix,
        adornosMix,
    }
}  
</script>
