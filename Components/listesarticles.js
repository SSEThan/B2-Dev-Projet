const  ProductList = {
	data() {
	  return {
		produits: [
		  { id: 0, name: "produit1",routeProd:"/products/0" },
		  { id: 1, name: "produit2",routeProd:"/products/1" }
		]
	  }
	}, 
	template: `<div>
  Liste des produits<br/>
  <ul>
	<li v-for="el in produits">
	  <router-link :to="{ name:'productDesc',params:{id:el.id}}">{{ el.name }}</router-link>
	</li>
  </ul>
  <hr/>
  <router-view></router-view> 
  </div>` }