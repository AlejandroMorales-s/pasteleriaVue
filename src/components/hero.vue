<template>
    <div class="header">
        <div class="contenedor">
            <div class="barra">
                <router-link class="logo" to="/">
                    <img class="logo__img" src="../assets/Logo.png" alt="">
                </router-link>
                <nav class="nav">
                    <router-link class="nav__enlace btn-width" to="/orden">
                        <div class="btn  btn-width btn-nav">
                            <p>Ordena</p>
                        </div>
                    </router-link>
                    <router-link class="nav__enlace" to="/adornos">Adornos</router-link>
                    <router-link class="nav__enlace" to="/sabores">Sabores</router-link>
                </nav>
            </div>
        </div>
        <div class="header__texto">
            <h2 class="header__text__info">Los mejores pasteles<br>A un solo click</h2>

        </div>
    </div>
</template>

<script>
export default {
    name: 'heroComp',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Navegacion*/
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

/*Header*/
.header{
    background-image: url(../assets/bg-imagen.png);
    height: 70rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.header__texto{
    text-align: center;
    color: var(--blanco);
    margin-top: 20rem;
}
@media (max-width: 480px) {
    .header__texto{
        margin-top: 26rem;
    }
}
.header__text__info{
    display: inline-block;
    border: 0.4rem solid var(--primario);
    border-radius: 1rem;
    padding: 1rem;
    -webkit-text-stroke: 0.5px black;
}
.header__texto__si{
    background-color: var(--primario);
}
</style>
