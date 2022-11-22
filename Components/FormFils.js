const FormFils={
    template:
       `<form @submit.prevent="onSubmit">
        <label for="name">Nom de l'article</label>
        <input id="name" v-model="name" placeholder="Nom de l'article"></input>

        <label for="categorie">La catégorie</label>
        <input id="categorie" v-model="name" placeholder="La catégorie"></input>

        <label for="nomauteur">Le nom de l'auteur</label>
        <input id="nomauteur" v-model="nomauteur" placeholder="Nom de l'auteur"></input>
        </form>
    `,
    data() {
        return {
            name: '',
            categorie: '',
        }
    },
    methods: {
    },
    computed: {

    },
    updated(){
        this.$emit('form-submitted', this.name)
    },
}
