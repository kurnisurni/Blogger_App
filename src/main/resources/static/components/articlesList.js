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
        </li>
    </ul>
    `,
    computed: {
    articles() {
        return this.$store.state.articles
    }
    }
}