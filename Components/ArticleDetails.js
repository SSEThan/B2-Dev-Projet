console.log("lancement")

const ArticleDetails= {
template :`
<div class="Article">
<div class="TitreSection-Article">{{$route.params.name}}</div>
<div class="CategorieArticle">Categorie : {{$route.params.categorie}}<div>

<div class="Text-Article">{{$route.params.texte}}</div>
<br>
<div id="auteur">
    <div style="display: inline">Auteur : {{$route.params.nomAuteur}}</div>
    <a v-bind:href="urls" style="display inline">Source</a>
</div>
<br>
<br>
<div class="illustration">
    <img v-bind:src="images" class="illustration-image">
</div>
<br>
<div>
`,

uptated(){
    console.log("upt")
    this.images = this.$route.params.illustration
    this.urls=this.$route.params.url
},

data(){
    return{
        images: this.$route.params.illustration,
        urls: this.$route.params.url
    }
},
}





