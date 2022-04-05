<template>
    <div>
        <div class="campo">
            <label class="campo__label" for="nombre">Nombre</label>
            <input v-model="nameChange" class="campo__field" id="nombre" type="text" placeholder="Nombre">
        </div>
        <div class="campo">
            <label class="campo__label" for="telefono">Teléfono</label>
            <input v-model="telChange" class="campo__field" id="telefono" type="tel" name="telefono" maxlength="10" placeholder="Teléfono">
        </div>
        <div class="campo">
            <label class="campo__label"  for="email">Email</label>
            <input v-model="mailChange" class="campo__field" id="email" type="email" placeholder="Tu Correo">
        </div>
        <div class="campo">
            <label class="campo__label"  for="texto">Mensaje</label>
            <textarea v-model="textChange" class="campo__field" id="texto" cols="30" rows="10"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: "preguntasComp",
    computed: {
        nameChange: {
            get(){
                return this.$store.state.form.name;
            },
            set(name){
                this.$store.dispatch("nameChange",name);
            }
        },
        telChange: {
            get(){
                return this.$store.state.form.tel;
            },
            set(tel){
                this.$store.dispatch("telChange",tel);
            }
        },
        mailChange: {
            get(){
                return this.$store.state.form.mail;
            },
            set(mail){
                this.$store.dispatch("mailChange",mail);
            }
        },
        textChange: {
            get(){
                return this.$store.state.form.text;
            },
            set(text){
                this.$store.dispatch("textChange",text);
            }
        }
    },
}
</script>

<style scoped>
.campo{
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.campo__label{
    color: var(--negro);
    font-size: 2rem;
}
.campo__field{
    background-color: var(--gris_oscuro);
    border: none;
    width: 100%;
    height: 3.5rem;
    font-size: 2rem;
    color: var(--negro);
    border-radius: 0.5rem;
}
</style>