const FormFils={
    template:
        `<form @submit.prevent="onSubmit">
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