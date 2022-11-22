const FormPere={
    template:
        `<div>
            <h2>composant père :{{name}}</h2>
            <form-fils @form-submitted="showName"></form-fils>
      </div>
    `,
    data() {
        return {
            name: ''
        }
    },
    methods: {
        showName(txt) {
            this.name = txt
        }
    },
    computed: {

    },
}