// 1. Définir ce qui apparait sur la page d'accueil.
const Home = { 
  template: 
  '<div>Bienvenue sur notre Encyclopédie dédiée au film et série Netflix.<br>Ces articles ont été rédigé par CamilleB, Ethan D, Adrien J</p></div>'
 }


// 2. Définir des itinéraires
const routes = [
  { path: '/', 
    component: ProductList,
    children: [
      {
        // UserProfile sera rendu dans la <router-view> de l'utilisateur.
        // quand /user/:id/profile est trouvé
        path: ':id',
        component: article1,
      }
    ],
  },
  { path: '/contact', component: FormPere },

]

// 3. Créer l'instance de routeur et passer l'option `routes`.
const router = VueRouter.createRouter({

  // 4. Fournir l'implémentation de l'historique à utiliser. Pour des raisons de simplicité, nous utilisons ici l'historique de hachage.
  history: VueRouter.createWebHashHistory(),
  routes, // 
})

// 5. Créer et monter l'instance root.
const app = Vue.createApp({})
// on utilise l'instance de routeur pour que l'ensemble de l'application soit compatible avec le routeur.
app.use(router)
//app.component('nav-bar',Nav)
app.component('foot-bar',Footer)
app.component('form-fils',FormFils)

app.mount("#app")


