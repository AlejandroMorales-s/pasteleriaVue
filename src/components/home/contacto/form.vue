<template>
    <preguntasComp />
    <saboresMix />
    <adornosMix />
</template>

<script>
import preguntasComp from '@/components/home/contacto/preguntas.vue'
import saboresMix from '@/components/home/contacto/saboresMix.vue'
import adornosMix from '@/components/home/contacto/adornosMix.vue'

export default {
    name: "formComp",
    components: {
        preguntasComp,
        saboresMix,
        adornosMix,
    }
}  
</script>
