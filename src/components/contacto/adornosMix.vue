<template>
                        <div class="select__sabores">
                        <h4 class="centrar-texto">Adornos</h4>
                        <div class="select__sabores__container">
                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i10"></div>
                                <div class="card__label">
                                    <input type="checkbox" id="velas" name="velas" value="Velas">
                                    <label for="velas">Velas</label>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i11"></div>
                                <div class="card__label">
                                    <input type="checkbox" id="velas-cumpleaños" name="velas-cumpleaños" value="Vela de cumpleaños">
                                    <label for="velas-cumpleaños">Vela de cumpleaños</label><br>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i12"></div>
                                <div class="card__label">
                                    <input type="checkbox" id="graduacion" name="graduacion" value="Graduación">
                                    <label for="graduacion">Graduación</label><br>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i13"></div>
                                <div class="card__label">
                                    <input type="checkbox" id="cumpleaños" name="cumpleaños" value="Cumpleaños">
                                    <label for="cumpleaños">Cumpleaños</label><br>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i14"></div>
                                <div class="card__label">
                                    <input type="checkbox" id="flores" name="flores" value="Flores">
                                    <label for="flores">Flores</label><br>
                                </div>
                            </div>

                            <div class="select__sabores__card card">
                                <div class="select__sabores__card__img card__img i15"></div>
                                <div class="card__label">
                                    <input type="checkbox" id="boda" name="boda" value="Boda">
                                    <label for="boda">Boda</label><br>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="enviar-container">
                        <input type="submit" value="Enviar" class="btn btn__submit">
                    </div>
</template>

<script>
export default {
    name: "adornosMix"
}
</script>

<style scoped>
.enviar-container{
    display: flex;
    justify-content: end;
}
.btn__submit{
    border: none;
    margin: 1rem 0 0 0;
}
.btn__submit:hover{
    cursor: pointer;
}
.i10{
    background-image: url(../../assets/vela.jpg);
}
.i11{
    background-image: url(../../assets/vela-num.jpg);
}
.i12{
    background-image: url(../../assets/graduacion.jpg);
}
.i13{
    background-image: url(../../assets/cumpleaños.jpg);
}
.i14{
    background-image: url(../../assets/flores.jpg);
}
.i15{
    background-image: url(../../assets/boda.jpg);
}
</style>