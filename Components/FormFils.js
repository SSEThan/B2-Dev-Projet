const FormFils= {
    template:

       `    <div class="TitreSection">
            <h2>Ajouter un article :{{name}}</h2>
            </div>
      
       <!--Formulaire Création Article-->

       <div class="form-creation">
        <form @submit.prevent="onSubmit">
            <div class="form-nom">
                
                    <input id="name" v-model="name" placeholder="Nom de l'article">
                </div>
                    <br>
                <div class="form-catégorie">
                
                    <select v-model="categorie" name="categorie" id="categorie">
                        <option value="">Categories :</option>
                        <option value="serie">Série</option>
                        <option value="film">Film</option>
                        <option value="anime">Animé</option>
                    </select>
                </div>
                <br>
                <div class="form-Texte">
                
                    <textarea v-model="texte" id="texte" name="Texte de l'article" placeholder="Texte"></textarea>
                </div>
                    <br>
                <div class="form-auteur">
                
                    <input id="nomAuteur" v-model="nomAuteur" placeholder="Nom de l'auteur">
                </div>
                    <br>
                <div class="form-url-source">
                
                    <input v-model="url" type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30" required>
                </div>
                    <br>
                    <div class="form-url-image">
                
                   <input v-model="illustration" type="file" id="illustration" name="illustration" accept="image/png, image/jpeg"> 
                </div>
                   <br>
                   <div class="button-valider-div">
                <input class="button" type="submit" value="Valider">
            </div>
                </form>
        </div>
            

    `,
    data() {
        return {
           categorie : '', name : '', texte : '', nomAuteur : '', url : '', illustration : ''

        }
    },
    /*Ajout de propritétés calculés  */
    methods: {
        onSubmit(){
            console.log("test")
            if(!this.name){
                alert("veuillez renseigner un nom")
            }
            if(!this.categorie){
                alert("veuillez renseigner une categorie")
            }
            if(!this.texte){
                alert("veuillez renseigner du texte")
            }
            if(!this.nomAuteur){
                alert("veuillez renseigner un auteur")
            }
            
            if (this.url==""){
                this.url="test"

            }
            if(this.url==undefined){
                this.url="test"
            }
            /*if(this.illustration==""){
                this.illustration="../img/noimg.png"
            }*/
            if(!this.illustration){
                this.illustration="./img/noimg.png"
            }
            
            let nouvelArticle = {name:this.name,nomAuteur:this.nomAuteur,categorie:this.categorie,texte:this.texte,url:this.url,illustration:this.illustration}
            this.$emit('formsub',nouvelArticle)
            console.log("ajout")
            alert("Article ajouté")
            this.name=""
            this.categorie=""
            this.texte=""
            this.nomAuteur=""
            this.url=""
            this.illustration=""
        }
    },
    computed: {

    },
    
}
