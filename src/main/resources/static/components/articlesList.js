export default {
    template: `
    <ul>
        <li v-for="article of articles"
            :key="article.id"
            class="article-card">
            id: {{ article.id }} <br>
            title: {{ article.title }} <br>
            content: {{ article.content }} <br>
            published: {{ article.published }}
            <button v-if="removing === article.id" @click="deleteArticle(article.id)">🗑️</button>
        </li>
    </ul>
    `,
    data(){
        return {
        removing: '',
        }
    },
    computed: {
    articles() {
        return this.$store.state.articles
    }
    },
    methods: {
        async deleteArticle(articleId, index) {
            let result = await fetch('/rest/articles/{id}', {
                method: 'DELETE',
                body: JSON.stringify(article)
            })
            result = await result.json()
        }
    }
}
