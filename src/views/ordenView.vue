<template>
    <navComp />
    <h3 class="title no-margin">Haz tu pedido</h3>
    <div class="contacto-container contenedor">
        <div class="contacto__img"></div>
        <div class="prueba">
            <div class="formulario">
                <formComp />
            </div>
        </div>
    </div>
    <infoComp />
    <footerComp />
</template>

<script>
// @ is an alias to /src
import navComp from '@/components/nav.vue'
import formComp from '@/components/form.vue'
import footerComp from '@/components/footer.vue'
import infoComp from '@/components/info.vue'


export default {
    name: 'ordenView',
    components: {
        navComp,
        formComp,
        footerComp,
        infoComp

    }
}
</script>

<style scoped>
.prueba{
    height: max-content;
    padding: 2.5rem;
    background-color: var(--gris_claro);
    max-width: 90%;
    margin: -7rem auto 0 auto;
    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
}
@media (max-width: 768px) {
    .prueba{
        max-width: 95%;
    }
}
.contacto__img{
    background-image: url(../assets/orden.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50rem;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 0.5rem;
}
@media (max-width: 768px) {
    .contacto-container{
        width: 100%;
    }
}
</style>