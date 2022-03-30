<template>
        <header class="nav">
        <div class="barra">
            <router-link to="/" rel="noopener noreferrer">
                <div class="logo-container"></div>
            </router-link>
            <nav class="nav-btn-container">
                <router-link to="/admin" class="nav__btn --active">Pedidos</router-link>
                <router-link to="/saboresAdmin" class="nav__btn">Sabores</router-link>
                <a href="adornos.html" class="nav__btn">Adornos</a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "navAdmin"
}
</script>

<style scoped>
/*Navegacion*/
.nav{                               /*Código para barra lateral*/
    background-color: var(--blanco);
    height: 100%;
    width: 10rem;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 1px solid var(--gris_oscuro);
    display: flex;
    flex-direction: column;
    box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.5);
}
@media (max-width: 480px) {
    .nav{
        position: relative;
        width: 100%;
    }
}
.barra{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: initial;
}
.logo-container{
    height: 10rem;
    width: 10rem;
    background-image: url(../../assets/Logo.png);
    background-size: cover;
    background-position: center center;
}
@media (max-width: 480px) {
    .logo-container{
        height: 7rem;
        width: 7rem;
        margin: 0 auto;
    }
}
.nav-btn-container{
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}
@media (max-width: 480px) {
    .nav-btn-container{
        margin-top: 1rem;
    }
}
.nav__btn{
    color: var(--negro);
    width: 100%;
    text-align: center;
    border-radius: 1rem;
}
.nav__btn:hover{
    background-color: var(--primario);
}
.--active{
    background-color: var(--primario__hover);
}
</style>