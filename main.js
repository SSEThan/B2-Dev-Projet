// 1. Définir ce qui apparait sur la page d'accueil.
const Home = { template: `<div class="texteHome">
  <p>
  Bienvenue sur notre Encyclopédie dédiée au film et série Netflix.
  <br>Ces articles ont été rédigé par CamilleB, Ethan D, Adrien J
  </p>
  </div>`
 }

const ProductDetails = {
  template: `<div> Fiche <br/>
Identifiant produit : {{$route.params.id}}
</div>`,
} 


const nosArticles = {
  template: `
    <div>
      <ul>
      <li v-for="Article in ListeArticles.Articles">{{Article}}</li>
      </ul>
    
    </div>
  
  
  
  `
}


//Affichage des articles
const ListeArticles = {
    Articles:[
      {name:"The Crown saison 5: retour sur la décennie infernale des Windsor",nomAuteur:"Camille",categorie:"Série",texte:"Les années 1990, marquées par de nombreux changements politiques, ont vu la famille royale se déliter sur le plan privé. Rien de tel qu un exhaustif rappel des faits pour se préparer au visionnage de cette nouvelle saison. La cinquième saison de The Crown, la série britannique consacrée а la vie d Elizabeth II d Angleterre, est sortie le 9 novembre. Le nouveau volet couvre les événements des années 1990 qui sur le plan politique et privé ont défini cette période de son règne. Mais que s est-il passé exactement pendant ces années?",url:"https://youtube.com",illustration:"./img/0961148.jpg"},
      {name:"La Casa de Papel Saison 5 : La fin d'une série emblématique",nomAuteur:"Ethan",categorie:"Série",texte:"Rio (Miguel Herrán) est au bout de sa vie et veut se venger absolument. Sa cible ? Les quelques soldats qui ont survécu à l'explosion organisée par Tokyo. Lisbonne (Itziar Ituño) arrive à le calmer et, avec Palerme (Rodrigo de la Serna) décide de faire intervenir une équipe pour soigner l'un des soldats ennemis",url:"https://www.purebreak.com/news/la-casa-de-papel-saison-5-partie-2-quelle-fin-pour-la-serie-le-recap-100-spoilers/223194#:~:text=Rio%20(Miguel%20Herr%C3%A1n)%20est%20au,l'un%20des%20soldats%20ennemis.",illustration:"./img/cdp_dev.jpeg"},
      {name:"Balle Perdue : Un film marquant à la Netflix",nomAuteur:"Ethan",categorie:"Film",texte:"Lino est un mécanicien passionné de voitures bélier. Charas, capitaine d'une unité de police, le repère et lui propose un marché qu'il ne peut pas refuser : pour éviter la prison, il met sa passion à son service. Un an et demi plus tard, les talents de concepteur de voitures-béliers de Lino ont fait leurs preuves : son équipe est la plus redoutable sur les routes du sud de la France. Malheureusement, ça ne va pas durer...",url:"https://netflix.com",illustration:"./img/balle_p_dev.jpeg"}
    ]
}



// 2. Définir des itinéraires
const routes = [
  { path: '/', component: Home },
  {
    path: '/products', component: ProductList, props : ListeArticles,
    children: [
      {
        // UserProfile sera rendu dans la <router-view> de l'utilisateur.
        // quand /user/:id/profile est trouvé
        path:':id/:name/:categorie/:texte/:nomAuteur/:url/:illustration',
        name:'ArticleDetails',
        component: ArticleDetails,
        props : ListeArticles,
      }
    ],
  },
  { path: '/contact', component: FormFils },

]

// 3. Créer l'instance de routeur et passer l'option `routes`.
const router = VueRouter.createRouter({

  // 4. Fournir l'implémentation de l'historique à utiliser. Pour des raisons de simplicité, nous utilisons ici l'historique de hachage.
  history: VueRouter.createWebHashHistory(),
  routes, // 
})

// 5. Créer et monter l'instance root.
const app = Vue.createApp({

  date(){
    return {

    };
  },
  
  methods:{
    ajoutArticle(theArticle){
      console.log(theArticle)
      ListeArticles.Articles.push(theArticle)
      console.log("push")
    },
  }








})
// on utilise l'instance de routeur pour que l'ensemble de l'application soit compatible avec le routeur.
app.use(router)
//app.component('nav-bar',Nav)
app.component('foot-bar',Footer)
app.component('form-fils',FormFils)

app.mount("#app")


