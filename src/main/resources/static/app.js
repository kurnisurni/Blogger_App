import navbar from './components/navbar.js'

export default {
    components: {
        navbar
    },
    template: `
      <div id="app">
        <navbar />
        <main>
          <router-view />
        </main>
      </div>
    `
  }