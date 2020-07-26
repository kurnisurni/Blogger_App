export default {
    template: `
     <ul>
        <li v-for="article of articles"
                :key="article.id"
                class="card">
                <h3> {{ article.title }} </h3>
                id: {{ article.id }} <br>
                content: {{ article.content }} <br>
                published: {{ article.published }} <br>
            <p @click="deleteArticle(article)">🗑️</p>
        </li>
    </ul>

    `,
    data(){
        return {
        articleTitle: '',
        articleContent: '',
        articlePublished: '',
        }
    },
    computed: {
    articles() {
        return this.$store.state.articles
    }
    },
    methods: {
        async deleteArticle(article) {
            let result = await fetch('/rest/articles/' + this.id, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(article)
            })
            result = await result.json()

            this.$store.commit('removeArticle', article)

        }
    }
}
