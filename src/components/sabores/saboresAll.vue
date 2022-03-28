<template>
            <div class="contenedor contenedor__bg">
                <h3 class="title no-margin">Sabores</h3>
                <div class="card__container__grid">
                    <div class="card">
                        <div class="card__img1 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.sabores.s1}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quisquam?</p>
                        <p class="price">{{ $store.state.saboresPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img2 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.sabores.s2}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, minus.</p>
                        <p class="price">{{ $store.state.saboresPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img3 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.sabores.s3}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, rem.</p>
                        <p class="price">{{ $store.state.saboresPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img4 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.sabores.s4}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, hic.</p>
                        <p class="price">{{ $store.state.saboresPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img9 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.sabores.s5}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quisquam?</p>
                        <p class="price">{{ $store.state.saboresPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img10 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.sabores.s6}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, minus.</p>
                        <p class="price">{{ $store.state.saboresPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img11 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.sabores.s7}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, rem.</p>
                        <p class="price">{{ $store.state.saboresPrice }}</p>
                    </div>
                    <div class="card">
                        <div class="card__img12 card__img"></div>
                        <h4 class="card__title no-margin">{{$store.state.sabores.s8}}</h4>
                        <p class="no-margin card__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, hic.</p>
                        <p class="price">{{ $store.state.saboresPrice }}</p>
                    </div>
                </div>
                
            </div>
</template>

<script>
export default {
    name: "saboresAll"
}
</script>

<style scoped>
.card__img1{
    background-image: url(../../assets/chocolate.jpg);
}
.card__img2{
    background-image: url(../../assets/vainilla.jpg);
}
.card__img3{
    background-image: url(../../assets/fresa.jpg);
}
.card__img4{
    background-image: url(../../assets/limon.jpg);
}
.card__img9{
    background-image: url(../../assets/red-velvet.jpg);
}
.card__img10{
    background-image: url(../../assets/napolitano.jpg);
}
.card__img11{
    background-image: url(../../assets/coco.webp);
}
.card__img12{
    background-image: url(../../assets/zanahoria.jpg);
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