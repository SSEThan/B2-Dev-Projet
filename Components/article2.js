const article2={
    template:
        `<div>
        <h1>{{item.titre}}</h1>
        
         </div>`,
         data() {
            return {
                id: 1,
                titre: '',
                router: '',
                Corps:'',
                Image: '',
                source:'',
            }
          },
          methods: {
            showName(txt) {
                this.article2 = txt
            }
          },
}
