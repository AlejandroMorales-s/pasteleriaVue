<template>
                <div id="contenedor" class="contenedor contenedor__bg">
                <h3 class="title no-margin">Adornos</h3>
                <div class="card__container__grid">
                    <div class="card">
                        <div class="card__img5 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.adornos.a1}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quisquam?</p>
                        <p class="price">{{ $store.state.adornosPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img6 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.adornos.a2}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, minus.</p>
                        <p class="price">{{ $store.state.adornosPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img7 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.adornos.a3}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, rem.</p>
                        <p class="price">{{ $store.state.adornosPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img8 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.adornos.a4}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, hic.</p>
                        <p class="price">{{ $store.state.adornosPrice }}</p>
                    </div>

                    <div class="card">
                        <div class="card__img13 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.adornos.a5}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quisquam?</p>
                        <p class="price">{{ $store.state.adornosPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img14 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.adornos.a6}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, minus.</p>
                        <p class="price">{{ $store.state.adornosPrice }}</p>
                    </div>
                </div>
                
            </div>
</template>

<script>
export default {
    name: "adornosAll"
}
</script>

<style scoped>
.card__img5{
    background-image: url(../../../assets/vela.jpg);
}
.card__img6{
    background-image: url(../../../assets/vela-num.jpg);
}
.card__img7{
    background-image: url(../../../assets/graduacion.jpg);
}
.card__img8{
    background-image: url(../../../assets/cumpleaños.jpg);
}
.card__img13{
    background-image: url(../../../assets/flores.jpg);
}
.card__img14{
    background-image: url(../../../assets/boda.jpg);
}

.card__container__grid{
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 95%;
    column-gap: 2.5rem;
}

@media (max-width: 768px) {
    .card__container__grid{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 480px) {
    .card__container__grid{
        grid-template-columns: 1fr;
    }
}
</style>