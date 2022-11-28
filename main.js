const Home = { template: '<div>Bienvenue sur notre Encyclopédie dédiée au film et série Netflix.<br>Ces articles ont été rédigé par CamilleB, Ethan D, Adrien J</p></div>'
 }

const ProductDetails = {
  template: `<div>Fiche <br/>
Identifiant produit : {{$route.params.id}}

</div>`,
} 




// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  {
    path: '/products', component: ProductList,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: ':id',
        name:'productDesc',
        component: ProductDetails,
      }
    ],
  },
  { path: '/contact', component: FormPere },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
//app.component('nav-bar',Nav)
app.component('foot-bar',Footer)
app.component('form-fils',FormFils)

app.mount("#app")

// Now the app has started!

