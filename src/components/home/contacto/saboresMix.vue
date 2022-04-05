<template>
    <div class="select__sabores">
                        <h4 class="centrar-texto">Sabor(es)</h4>
                        <div class="select__sabores__container">

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i1"></div>
                                <div class="card__label">
                                    <input v-model="sabor" type="checkbox" id="chocolate" name="chocolate" value="Chocolate">
                                    <label for="chocolate">Chocolate</label>
                                </div>

                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i2"></div>
                                <div class="card__label">
                                    <input v-model="sabor" type="checkbox" id="red-velvet" name="red-velvet" value="RedVelvet">
                                    <label for="red-velvet">Red Velvet</label>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i3"></div>
                                <div class="card__label">
                                    <input class="checkbox" v-model="sabor" type="checkbox" id="vainilla" name="vainilla" value="Vainilla">
                                    <label for="vainilla">Vainilla</label>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i4"></div>
                                <div class="card__label">
                                    <input class="checkbox" v-model="sabor" type="checkbox" id="zanahoria" name="zanahoria" value="Zanahoria">
                                    <label for="zanahoria">Zanahoria</label>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i5"></div>
                                <div class="card__label">
                                    <input class="checkbox" v-model="sabor" type="checkbox" id="fresa" name="fresa" value="Fresa">
                                    <label for="fresa">Fresa</label>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i6"></div>
                                <div class="card__label">
                                    <input class="checkbox" v-model="sabor" type="checkbox" id="limon" name="limon" value="Limon">
                                    <label for="limon">Limón</label>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i8"></div>
                                <div class="card__label">
                                    <input class="checkbox" v-model="sabor" type="checkbox" id="coco" name="coco" value="Coco">
                                    <label for="coco">Coco</label>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i9"></div>
                                <div class="card__label">
                                    <input class="checkbox" v-model="sabor" type="checkbox" id="napolitano" name="napolitano" value="Napolitano">
                                    <label for="napolitano">Napolitano</label>
                                </div>
                            </div>
                        <p>{{sabor}}</p>
                        </div>
    </div>
</template>

<script>

export default {
    name: "saboresMix",
    // Datos




    el: '.card__label',
    data(){
        return{
            sabor: [],
        }
    },
    mounted() {
        if (localStorage.sabor) {
        this.sabor = localStorage.sabor;
        }
    },
    watch: {
        sabor(newSabor) {
        localStorage.sabor = newSabor;
        }
    }

}
</script>

<style>
.select__sabores__container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2.5rem;
    row-gap: 2.5rem;
}
@media (max-width: 768px) {
    .select__sabores__container{
        grid-template-columns: repeat(2,1fr);
    }
}
@media (max-width: 480px) {
    .select__sabores__container{
        display: block;
    }
}
.card__label{
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
}
.select__sabores__card{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
}
@media (max-width: 480px) {
    .select__sabores__card{
        margin-bottom: 1.5rem;
    }
}
.i1{
    background-image: url(../../../assets/chocolate.jpg);
}
.i2{
    background-image: url(../../../assets/red-velvet.jpg);
}
.i3{
    background-image: url(../../../assets/vainilla.jpg);
}
.i4{
    background-image: url(../../../assets/zanahoria.jpg);
}
.i5{
    background-image: url(../../../assets/fresa.jpg);
}
.i6{
    background-image: url(../../../assets/limon.jpg);
}
.i8{
    background-image: url(../../../assets/coco.webp);
}
.i9{
    background-image: url(../../../assets/napolitano.jpg);
}
</style>