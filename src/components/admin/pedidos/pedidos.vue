<template>
    <div class="container">
        <div class="title">
            <h1 class="no-margin">Pedidos</h1>
        </div>
        <div class="info__container">
            <h2 class="info__intro">Nuevos pedidos recibidos:</h2>
            <div class="info__grid">


                <div class="pedido-card">
                    <h3 class="pedido-card__title centrar-texto no-margin">Pedido #1</h3>
                    <h4 class="nombre no-margin">Nombre:</h4>
                    <p class="nombre__info no-margin">{{$store.state.form.name}}</p>
                    <h4 class="nombre no-margin">Teléfono:</h4>
                    <p class="nombre__info no-margin">{{$store.state.form.tel}}</p>
                    <h4 class="nombre no-margin">Email:</h4>
                    <p class="nombre__info no-margin">{{$store.state.form.mail}}</p>
                    <h4 class="nombre no-margin">Mensaje:</h4>
                    <p class="nombre__info no-margin">{{$store.state.form.text}}</p>
                    <div class="pedido-card__sabores">
                        <h4>Sabores</h4>
                        <div class="pedido-card__adornos-grid">
                            <p>{{$store.state.taste}}</p>
                        </div>
                    </div>
                    <div class="pedido-card__adornos">
                        <h4>Adornos</h4>
                        <div class="pedido-card__adornos-grid">
                            <div class="card">
                                <div class="a4 card__img"></div>
                                <h5 class="card__title no-margin">Boda</h5>
                            </div>
                            <div class="card">
                                <div class="a6 card__img"></div>
                                <h5 class="card__title no-margin">Flores</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pedido-card">
                    <h3 class="pedido-card__title centrar-texto no-margin">Pedido #2</h3>
                    <h4 class="nombre no-margin">Nombre:</h4>
                    <p class="nombre__info no-margin">Mario</p>
                    <h4 class="nombre no-margin">Teléfono:</h4>
                    <p class="nombre__info no-margin">+525512345678</p>
                    <h4 class="nombre no-margin">Email:</h4>
                    <p class="nombre__info no-margin">alguien@gmail.com</p>
                    <h4 class="nombre no-margin">Mensaje:</h4>
                    <p class="nombre__info no-margin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam, accusantium aliquam sint illo laborum illum dignissimos. Iusto, quisquam facere.</p>
                    <div class="pedido-card__sabores">
                        <h4>Sabores</h4>
                        <div class="pedido-card__adornos1">
                            <div class="card">
                                <div class="s3 card__img"></div>
                                <h5 class="card__title no-margin centrar-texto">Napolitano</h5>
                            </div>
                        </div>
                    </div>
                    <div class="pedido-card__adornos">
                        <h4>Adornos</h4>
                        <div class="pedido-card__adornos-grid">
                            <div class="card">
                                <div class="a1 card__img"></div>
                                <h5 class="card__title no-margin">Graduación</h5>
                            </div>
                            <div class="card">
                                <div class="a3 card__img"></div>
                                <h5 class="card__title no-margin">Cumpleaños</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pedido-card">
                    <h3 class="pedido-card__title centrar-texto no-margin">Pedido #3</h3>
                    <h4 class="nombre no-margin">Nombre:</h4>
                    <p class="nombre__info no-margin">Roberto</p>
                    <h4 class="nombre no-margin">Teléfono:</h4>
                    <p class="nombre__info no-margin">+525512345678</p>
                    <h4 class="nombre no-margin">Email:</h4>
                    <p class="nombre__info no-margin">alguien@gmail.com</p>
                    <h4 class="nombre no-margin">Mensaje:</h4>
                    <p class="nombre__info no-margin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam, accusantium aliquam sint illo laborum illum dignissimos. Iusto, quisquam facere.</p>
                    <div class="pedido-card__sabores">
                        <h4>Sabores</h4>
                        <div class="pedido-card__adornos-grid">
                            <div class="card">
                                <div class="s1 card__img"></div>
                                <h5 class="card__title no-margin centrar-texto">Chocolate</h5>
                            </div>
                            <div class="card">
                                <div class="s7 card__img"></div>
                                <h5 class="card__title no-margin centrar-texto">Zanahoria</h5>
                            </div>
                        </div>
                    </div>
                    <div class="pedido-card__adornos">
                        <h4>Adornos</h4>
                        <div class="pedido-card__adornos1">

                            <div class="card">
                                <div class="a5 card__img"></div>
                                <h5 class="card__title no-margin centrar-texto">Números</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "pedidos",
}
</script>

<style scoped>

/*Pedidos*/
.title{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2.5rem auto;
}
.info__grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
}
@media (max-width: 768px) {
    .info__grid{
        display: flex;
        flex-direction: column;
        row-gap: 2.5rem;
    }
}
.pedido-card{
    background-color: var(--gris_claro2);
    padding: 2.5rem;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);
}
.nombre{
    margin: 2.5rem 0;
}
.pedido-card__adornos-grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.5rem;
}
@media (max-width: 480px) {
    .pedido-card__adornos-grid{
        display: flex;
        flex-direction: column;
    }
}
</style>