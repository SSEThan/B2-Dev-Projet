// 1. Define route components.
// These can be imported from other files 
const Home = { template: '<div>Bienvenue sur notre site</div>' } 

const Productlist = { data(){
    return{
        tab:[
            {id:0,name:"produit0"},
            {id:1,name:"produit1"},
            {id:2,name:"produit2"},
        ]
    }
}
    
,template: `<div> Liste des produits<br/> 
<ul>
    <li>
        <router-link to="/products/0">produit0</router-router-link>
    </li>
    <li>
    <router-link to="/products/0">produit1</router-router-link>
    </li>
    <li>
    <router-link to="/products/0">produit2</router-router-link>
    </li>
</ul>
<router-view></router-view></div>`}

const ProductDetails = { template: '<div>Fiche produit</div>' }

const Contact = { template: '<div>Form Contact </div>' }


// 2. Define some routes
// Each route should map to a component. // We'll talk about nested routes later. 
const routes = [
  { path: '/', component: Home },

  { path: '/products', component: Productlist,
    children:[
        {
            path: ':id',
            component: ProductDetails,
            }
         ],
     },
  { path: '/contact/', component: Contact},
]

// 3. Create the router instance and pass the `routes`option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
history: VueRouter.createWebHashHistory(),
routes, 
// short for `routes: routes` 
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the // whole app router-aware.
app.use(router)
app.mount("#app")

