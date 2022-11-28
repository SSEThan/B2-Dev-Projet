const FormFils={
    template:
       `
       <!--Formulaire Création Article--!>
       <div class="form-creation>
       <form @submit.prevent="onSubmit">
        <div>
            <label for="name">Nom de l'article</label>
                <input id="name" v-model="name" placeholder="Nom de l'article"></input>
            
            <br><br>
            <label for="categorie">La catégorie :</label>
                <select name="categorie" id="categorie">
                    <option value="">Categories :</option>
                    <option value="serie">Série</option>
                    <option value="film">Film</option>
                    <option value="anime">Animé</option>
            </select>

            <br><br>
            <label for="texte-article">Texte de l'article</label>
                <textarea id="textexte-articlete" name="Texte de l'article"></textarea>

                <br><br>
            <label for="nomauteur">Le nom de l'auteur</label>
                <input id="nomauteur" v-model="nomauteur" placeholder="Nom de l'auteur"></input>
            
                <br><br>
                <label for="url">URL de la source</label>
                <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30" required>

                <br><br>
            <label for="illustration">Image d'illustratoion:</label>
                <input type="file" id="illustration" name="illustration" accept="image/png, image/jpeg">
            
                </form>
        </div class="form-creation>

            

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
