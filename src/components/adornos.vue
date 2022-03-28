<template>
    <div class="contenedor">
        <!--Adornos-->
        <h3 class="title no-margin">Adornos</h3>
        <div class="card__container">
            <div class="card">
                <div class="card__img5 card__img"></div>
                <h4 class="card__title no-margin">Velas</h4>
                <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quisquam?</p>
                <p class="price">$4.99</p>
            </div>
            <div class="card">
                <div class="card__img6 card__img"></div>
                <h4 class="card__title no-margin">Vela de cumpleaños</h4>
                <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, minus.</p>
                <p class="price">$4.99</p>
            </div>
            <div class="card">
                <div class="card__img7 card__img"></div>
                <h4 class="card__title no-margin">Graduación</h4>
                <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, rem.</p>
                <p class="price">$4.99</p>
            </div>
            <div class="card">
                <div class="card__img8 card__img"></div>
                <h4 class="card__title no-margin">Cumpleaños</h4>
                <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, hic.</p>
                <p class="price">$4.99</p>
            </div>
        </div>
        <router-link class="btn-width" to="/adornos">
            <div class="btn btn-width">
                <p class="btn__text">Todos</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "adornosComp"
}
</script>

<style scoped>
    .card__img5{
        background-image: url(../assets/vela.jpg);
    }
    .card__img6{
        background-image: url(../assets/vela-num.jpg);
    }
    .card__img7{
        background-image: url(../assets/graduacion.jpg);
    }
    .card__img8{
        background-image: url(../assets/cumpleaños.jpg);
    }
</style>