import getArticlesButton from '../components/getArticlesButton.js'
import articlesList from '../components/articlesList.js'
import addNewArticleForm from '../components/addNewArticleForm.js'

export default {
    components: {
        getArticlesButton,
        articlesList,
        addNewArticleForm
    },
    template: `
        <div>
            <h2>Home</h2>
            <getArticlesButton />

            <addNewArticleForm />

            <articlesList />
        </div>
    `
}