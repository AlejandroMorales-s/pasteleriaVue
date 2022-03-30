<template>
  <navAdmin />
  <pedidos />
</template>

<script>
// @ is an alias to /src

import navAdmin from '@/components/admin/nav.vue'
// eslint-disable-next-line
import pedidos from '@/components/admin/pedidos/pedidos.vue'

export default {
  name: 'AdminView',
  components: {
    navAdmin,
    pedidos
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