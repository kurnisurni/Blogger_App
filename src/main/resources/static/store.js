import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import Vuex from 'https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    setArticles(state, articles) {
        state.articles = articles
    },
    appendArticle(state, article) {
        state.articles.push(article)
    },
    removeArticle(state, article) {
        let indexOfArticle = state.articles.indexOf(article);
        state.articles.splice(indexOfArticle, 1);
        }
  }
})