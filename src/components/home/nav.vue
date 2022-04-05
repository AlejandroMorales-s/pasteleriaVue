<template>
    <header class="nav__container">
        <div class="contenedor barra">
            <router-link class="logo" to="/">
                <img class="logo__img" src="../../assets/Logo.png" alt="">
            </router-link>
            <nav class="nav">
                <router-link class="nav__enlace nav__enlace__global" to="/orden">Ordena</router-link>
                <router-link class="nav__enlace nav__enlace__global" to="/adornos">Adornos</router-link>
                <router-link class="nav__enlace nav__enlace__global" to="/sabores">Sabores</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "navComp"
}
</script>

<style scoped>
.nav__container{
    background-color: var(--primario);
    height: 10rem
}
.nav__enlace__global{
    color: var(--negro);
}
@media (max-width: 480px) {
    .nav__container{
        height: fit-content;
        padding-bottom: 2.5rem;
    }
}
.logo{
    display: flex;
    align-items: center;
}
</style>