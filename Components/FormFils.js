const FormFils={
    template:
        `<form @submit.prevent="onSubmit">
        <h3>Nom de l'article</h3>
        <input id="name" v-model="name"></input>
         </form>
    `,
    data() {
        return {
            name: ''
        }
    },
    methods: {
    },
    computed: {

    },
    updated(){
        this.$emit('form-submitted', this.name)
    }
}