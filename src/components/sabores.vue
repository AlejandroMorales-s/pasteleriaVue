<template>
    <div class="contenedor">
            <h3 class="title no-margin">Sabores</h3>
            <div class="card__container">
                <div class="card">
                    <div class="card__img1 card__img"></div>
                    <h4 class="card__title no-margin">Chocolate</h4>
                    <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quisquam?</p>
                    <p class="price">$24.99</p>
                </div>
                <div class="card">
                    <div class="card__img2 card__img"></div>
                    <h4 class="card__title no-margin">Vainilla</h4>
                    <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, minus.</p>
                    <p class="price">$24.99</p>
                </div>
                <div class="card">
                    <div class="card__img3 card__img"></div>
                    <h4 class="card__title no-margin">Fresa</h4>
                    <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, rem.</p>
                    <p class="price">$24.99</p>
                </div>
                <div class="card">
                    <div class="card__img4 card__img"></div>
                    <h4 class="card__title no-margin">Limón</h4>
                    <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, hic.</p>
                    <p class="price">$24.99</p>
                </div>
            </div>
            <router-link class="btn-width" to="/sabores">
                <div class="btn btn-width">
                    <p class="btn__text">Todos</p>
                </div>
            </router-link>
    </div>
</template>

<script>
export default {
    name: "saboresComp"
}
</script>

<style scoped>
    /*Sabores*/
    .card__img1{
        background-image: url(../assets/chocolate.jpg);
    }
    .card__img2{
        background-image: url(../assets/vainilla.jpg);
    }
    .card__img3{
        background-image: url(../assets/fresa.jpg);
    }
    .card__img4{
        background-image: url(../assets/limon.jpg);
    }

.card__info{
    line-height: 2.5rem;
}
</style>