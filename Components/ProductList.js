const  ProductList = {
	data() {
	  return {
		produits: [
		  { 
			id: 0, 
			name: "The Crown saison 5: retour sur la décennie infernale des Windsor",
			routeProd:"/products", 
			Corps:'Les années 1990, marquées par de nombreux changements politiques, ont vu la famille royale se déliter sur le plan privé. Rien de tel qu un exhaustif rappel des faits pour se préparer au visionnage de cette nouvelle saison.La cinquième saison de The Crown, la série britannique consacrée а la vie d Elizabeth II d Angleterre, est sortie le 9 novembre. Le nouveau volet couvre les événements des années 1990 qui sur le plan politique et privé ont défini cette période de son règne. Mais que s est-il passé exactement pendant ces années?', 
			
		},
		  { id: 1, name: "La “Mercredi” de la famille Addams ressuscitée par Tim Burton",routeProd:"/products/1" }
		]
	  }
	}, 
	template: `<div>
  Nos articles<br/>
  <ul>
	<li v-for="el in produits">
	  <router-link :to="{ name:'productDesc',params:{id:el.id}}">{{ el.name }}</router-link>
	</li>
  </ul>
  <hr/>
  <router-view></router-view> 
  </div>` }


