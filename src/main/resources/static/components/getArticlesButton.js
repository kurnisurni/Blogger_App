export default {
    template: `
      <button @click="getArticles">Fetch Articles</button>
    `,
    methods: {
      async getArticles() {
        let articles = await fetch('/rest/articles')
        articles = await articles.json()
  
        console.log(articles)
      }
    }
}