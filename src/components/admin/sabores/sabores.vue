<template>
    <div class="container">
        <div class="title">
            <h1 class="no-margin">Sabores</h1>
        </div>
        <div class="info__container">
            <h2 class="info__intro">Sabores disponibles:</h2>
            <div class="ingredientes-restantes-grid">
                <div class="card">
                    <div class="s1 card__img"></div>
                    <h4 class="card__title no-margin">Chocolate</h4>
                    <p class="card__status status-disponible">Disponible</p>
                </div>
                <div class="card">
                    <div class="s2 card__img"></div>
                    <h4 class="card__title no-margin">Coco</h4>
                    <p class="card__status status-disponible">Disponible</p>
                </div>
                <div class="card">
                    <div class="s3 card__img"></div>
                    <h4 class="card__title no-margin">Napolitano</h4>
                    <p class="card__status status-disponible">Disponible</p>
                </div>
                <div class="card">
                    <div class="s4 card__img"></div>
                    <h4 class="card__title no-margin">Limón</h4>
                    <p class="card__status status-disponible">Disponible</p>
                </div>
                <div class="card">
                    <div class="s5 card__img"></div>
                    <h4 class="card__title no-margin">Fresa</h4>
                    <p class="card__status status-disponible">Disponible</p>
                </div>
                <div class="card">
                    <div class="s6 card__img"></div>
                    <h4 class="card__title no-margin">Red Velvet</h4>
                    <p class="card__status status-no-disponible">No disponible</p>
                </div>
                <div class="card">
                    <div class="s7 card__img"></div>
                    <h4 class="card__title no-margin">Zanahoria</h4>
                    <p class="card__status status-no-disponible">No disponible</p>
                </div>
                <div class="card">
                    <div class="s8 card__img"></div>
                    <h4 class="card__title no-margin">Vainilla</h4>
                    <p class="card__status status-no-disponible">No disponible</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "sabores"
}
</script>

<style scoped>
.ingredientes-restantes-grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2.5rem;
}
@media (max-width: 768px) {
    .ingredientes-restantes-grid{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 480px) {
    .ingredientes-restantes-grid{
        display: flex;
        flex-direction: column;
    }
}
/*Sabores*/
.card__img{
    border-radius: 1rem;
    height: 30rem;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.s1{
    background-image: url(../../../assets/chocolate.jpg);
}
.s2{
    background-image: url(../../../assets/vainilla.jpg);
}
.s3{
    background-image: url(../../../assets/fresa.jpg);
}
.s4{
    background-image: url(../../../assets/limon.jpg);
}
.s5{
    background-image: url(../../../assets/red-velvet.jpg);
}
.s6{
    background-image: url(../../../assets/napolitano.jpg);
}
.s7{
    background-image: url(../../../assets/coco.webp);
}
.s8{
    background-image: url(../../../assets/zanahoria.jpg);
}
.card__title{
    margin: 2rem 0;
}
.card__status{
    margin: 0 0 2rem 0;
}
.status-no-disponible{
    color: var(--rojo);
    font-weight: 700;
}
.status-disponible{
    color: var(--verde);
    font-weight: 700;
}
</style>