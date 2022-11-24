const article1={
    template:
        `<div>
        <h1>{{item.tire}}</h1>
         </div>
    `,
    data() {
        return {
            id: 0,
            titre: 'The Crown saison 5: retour sur la décennie infernale des Windsor',
            router: '',
            Corps:'Les années 1990, marquées par de nombreux changements politiques, ont vu la famille royale se déliter sur le plan privé. Rien de tel qu un exhaustif rappel des faits pour se préparer au visionnage de cette nouvelle saison. La cinquième saison de The Crown, la série britannique consacrée а la vie d Elizabeth II d Angleterre, est sortie le 9 novembre. Le nouveau volet couvre les événements des années 1990 qui sur le plan politique et privé ont défini cette période de son règne. Mais que s est-il passé exactement pendant ces années?',
            Image: '',
            source: 'https://www.slate.fr/story/236213/the-crown-saison-5-netflix-elizabeth-ii-lady-diana-prince-charles-annus-horribilis',
        }
    },
    methods: {
        showName(txt) {
            this.article1 = txt
        }
    },
}