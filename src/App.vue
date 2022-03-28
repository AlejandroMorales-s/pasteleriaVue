<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
</template>

<style>

:root{
    --fuenteHeadings: 'Poppins', sans-serif;
    --fuenteParrafos: 'Poppins', sans-serif;

    --primario: #e2adf2;
    --primario__hover: #c895d8;
    --blanco: #ffffff;
    --negro: #000; 
    --gris_claro: #eee;
    --gris_oscuro: #c4c4c4;

    --colorFondo: #101113;
    --colorBotones: #393A3C;
    --colorFondoElementos: #242527;
    --colorText: #FEFEFE;
    --grisClaro: #646567;
}
html{
    font-size: 62.5%;
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}  
body{
    margin: 0;
    font-size: 1.6rem;
    font-family: var(--fuenteParrafos);
    line-height: 2;
    color: var(--negro);
}

/*Globales*/

a{
    text-decoration: none;
}
h1, h2, h3 ,h4{
    font-family: var(--fuenteHeadings);
    line-height: 1;
}
h1{
    font-size: 4.8rem;
}
h2{
    font-size: 4rem;
}
h3{
    font-size: 3.2rem;
}
h4{
    font-size: 2.8rem;
}
img{
    max-width: 100%;
}
p{
    font-family: var(--fuenteParrafos);
}

/*Utilidades*/
.no-margin{
    margin: 0;
}
.no-padding{
    padding: 0;
}
.centrar-texto{
    text-align: center;
}

/*Clases*/
.contenedor{
    max-width: 120rem;
    width: 90%;
    margin: 0 auto;
}
.contenedor__bg{
    background-color: var(--gris_claro);
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    padding-bottom: 5rem;
}
@media (max-width: 768px) {
    .contenedor__bg{
        width: 95%;
    }
}


.barra{
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo__img{
    width: 10rem;
    border-radius: 50%;
}
.nav{
    display: flex;
    gap: 1.5rem;
    align-items: center;
}
.nav__enlace{
    color: var(--blanco);
    font-weight: 600;
}
@media (max-width: 480px) {
    .barra{
        flex-direction: column;
    }
    .nav{
        flex-direction: column;
        margin-top: 2rem;
        width: 100%;
    }
    .contenedor{
        margin: 0 0;
        width: 100%;
        height: fit-content;
    }
}


.title{
    text-align: center;
    margin: 6rem 0;
}
.price{
    margin: 1rem 0;
    font-weight: bold;
}
.btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 5rem;
    background-color: var(--primario);
    margin-right: 3rem;
    border-radius: 0.5rem;
    color: var(--negro);
    font-weight: bold;
}
.btn-nav{
    margin-right: 0;
}


.card__container{
    display: flex;
    gap: 2.5rem;
    width: 95%;
    margin: 0 auto;
}
@media (max-width: 768px) {
    .card__container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 480px) {
    .card__container{
        display: flex;
        flex-direction: column;
    }
}
.card__img{
    border-radius: 0.5rem;
    height: 30rem;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.card__title{
    margin: 1rem 0;
}
</style>