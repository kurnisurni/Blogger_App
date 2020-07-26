export default {
    template: `
    <section>
        <div v-for="article of articles"
            :key="article.id"
            class="card">
            <div>
            <h3>title: {{ article.title }} </h3> <br>
            <p>id: {{ article.id }} </p> <br>
            <p>content: {{ article.content }} </p> <br>
            <p>published: {{ article.published }} </p>
            </div>
            <p @click="deleteArticle(article)">🗑️</p>
        </div>
    </section>

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
        async deleteArticle(article) {
            let result = await fetch('/rest/articles/{id}', {
                method: 'DELETE',
                body: JSON.stringify(article)
            })
            result = await result.json()

            this.$store.commit('removeArticle', article)
        }
    }
}
