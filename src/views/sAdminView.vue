<template>
    <navAdmin />
    <sabores />
</template>

<script>
import navAdmin from '@/components/admin/nav.vue'
import sabores from '@/components/admin/sabores/sabores.vue'

export default {
    name: 'sAdminView',
    components: {
    navAdmin,
    sabores
    }
}
</script>
<style scoped>
.container{
    max-width: 93%;
    margin-left: 10rem;
    padding: 0 2.5rem;
}
@media (max-width: 480px) {
    .container{
        max-width: 100%;
        margin: 0;
        padding: 0 1rem;
    }
}

</style>