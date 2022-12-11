const  ProductList = {
	data(){
		return{
			
		}
	},
	 
	template: `<div class="divArticles">
  		<div class="TitreArticles">Nos articles
		</div>
  
	<div v-on="ListeArticles">
	<ul>
		<li v-for="Article in Articles">
		<router-link :to="{name:'ArticleDetails', params:{id:Articles.indexOf(Article), name: Article.name ,categorie : Article.categorie ,texte : Article.texte ,nomAuteur : Article.nomAuteur ,url : Article.url ,illustration : Article.illustration}}"> {{Article.name}} </router-link>
		</li>

	</ul>

	</div>


  
  <hr/>
  <router-view></router-view> 
  </div>` ,

  props: {
	
	Articles : {type:Object},
  }






}


