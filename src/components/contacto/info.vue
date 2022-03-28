<template>
    <div>
        <h3 class="title no-margin">Nos ubicamos en</h3>
        <div class="contenedor contenedor__bg contenedor__info">
            <h4 class="title__info title">Dirección:</h4>
            <p class="info__pasteleria">Av. Aztecas 224, Los Reyes, Coyoacán, 04330 Ciudad de México, CDMX, México</p>
            <h4 class="title__info title">Teléfono:</h4>
            <p class="info__pasteleria">5589284602</p>
            <h4 class="title__info title">Horarios de atención:</h4>
            <p class="info__pasteleria">
                Lunes a Viernes: 9am - 9pm <br>
                Sábado: 9am - 5pm
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "infoComp"
}
</script>

<style scoped>
.title__info{
    margin: 1rem auto;
}
.info__pasteleria{
    text-align: center;
    margin: 0 auto;
}
.contenedor__info{
    padding: 1.2rem 0;
}
</style>