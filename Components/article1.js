const article1={
    template:
        `<div>
        <!-- Lorsque showListe est différent du booléen actuel alors il affichera le logo et les articles -->
        <div v-if="!showListe" class="liste-article-position">
        <div class="articles-image">
        <div className="crown-position">
        <input class="search-bar" placeholder="Search" type="text" v-model="search"/>
        <ul>
        <li v-for="article in filteredPosts">
        <router-link class="article" @click="updateShowListe(article.id)" :to="{ path:article.router }">{{ article.name }}</router-link>
        </li>
        </ul>
        </div>
        </div>

        <!-- Sinon afficher un bouton pour retourner à la liste d'article -->
        <!-- Affichage également des infos de l'article initialisé dans la data liste -->
        <div v-else>
        <p @click="updateShowListe(0)" class="back-button"><i class="uil uil-angle-left-b"></i>Retour à la liste d'article</p>
        <router-view @ChangeArticle="showNewArticle" :listedata="liste" :idActuel="idActuel"></router-view>
        </div>
        </div>`,
         data() {
            return {
            Listes: [
            {
                id: 0,
                titre: 'The Crown saison 5: retour sur la décennie infernale des Windsor',
                router: 'TheCrown',
                Corps:'Les années 1990, marquées par de nombreux changements politiques, ont vu la famille royale se déliter sur le plan privé. Rien de tel qu un exhaustif rappel des faits pour se préparer au visionnage de cette nouvelle saison. La cinquième saison de The Crown, la série britannique consacrée а la vie d Elizabeth II d Angleterre, est sortie le 9 novembre. Le nouveau volet couvre les événements des années 1990 qui sur le plan politique et privé ont défini cette période de son règne. Mais que s est-il passé exactement pendant ces années?',
                Image: 'img/thecrown.jpg',
                source: 'https://www.slate.fr/story/236213/the-crown-saison-5-netflix-elizabeth-ii-lady-diana-prince-charles-annus-horribilis',
            },
            {
                id: 1,
                titre: 'la “Mercredi” de la famille Addams ressuscitée par Tim Burton',
                router: 'Mercredi',
                Corps:'Ressusciter Mercredi: l’idée va comme un gant à ce trublion lugubre – qui n’aime rien tant que déterrer des cadavres. Dans les comics, puis dans la série des années 1960, le personnage regardait vers l’enfance. Puis en 1991, lorsqu’elle prit les traits de Christina Ricci au cinéma, l’aînée de la famille Addams devint l’incarnation du nihilisme adolescent. C’est cette Mercredi-là, reine du sarcasme allergique à l’hypocrisie, qui revient sous la houlette de l’expert ès gothisme Tim Burton, producteur de la série et réalisateur des quatre premiers épisodes. Mission de ce reboot modernisé : faire de Mercredi une héroïne d’aujourd’hui pour conquérir une nouvelle génération, tout en amusant les parents. Force est de constater que Tim Burton s’en acquitte d’abord avec un certain panache.',
                Image: 'img/mercredi.jpeg',
                source: 'https://www.telerama.fr/ecrans/sur-netflix-la-mercredi-de-la-famille-addams-ressuscitee-par-tim-burton-7013099.php',
            },

            ],
            showListe: false,
            idActuel: 0,
            search:"",
            }
          },
      
          
/**On récupère l'id pour l'ajouter à une variable qu'on nommera idActuel */
          methods: {
            updateSowListe(id){
                this.showListe=!this.showListe;
                this.idActuel = id;
            },
            showNewArticle(id) {
                this.idActuel = id;
            },
          },

         computed: {
            filteredPost(){
                return this.Liste.filter((article)=> article.name.includes(this.search));
            },
        },
};
