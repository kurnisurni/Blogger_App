import getArticlesButton from '../components/getArticlesButton.js'
import articlesList from '../components/articlesList.js'

export default {
    components: {
        getArticlesButton,
        articlesList
    },
    template: `
        <div>
            <h2>Movie list</h2>
            <getArticlesButton />

            <articlesList />
        </div>
    `
}