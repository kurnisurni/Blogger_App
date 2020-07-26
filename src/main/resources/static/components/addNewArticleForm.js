export default {
    template: `
    <form @submit.prevent="submitNewArticle">
        <input v-model="articleTitle" type="text"
        required
        placeholder="Enter an article's title  ...">
        <input v-model="articleContent" type="text"
        required
        placeholder="Enter an article's content  ...">
        <button>Add article</button>
    </form>
    `,
    data() {
        return {
            articleTitle: '',
            articleContent: '',
            articlePublished: ''
        }
    },
    methods: {
        async submitNewArticle(){
            if(!this.articleTitle.trim() &&
                !this.articleContent.trim()) {
                    return
                }
            let article = {
                title: this.articleTitle,
                content: this.articleContent,
                published: this.articlePublished
            }
            let result = await fetch('/rest/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(article)
                })

            result = await result.json()

            this.$store.commit('appendArticle', result)

            this.articleTitle = ''
            this.articleContent = ''

    }
    }
}