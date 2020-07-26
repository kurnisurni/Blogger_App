export default {
  template: `
  <div
    @click="onCardClick"
    ref="card"
    class="card"
  >
    <h2 @click.stop="removeCard">{{ project.title }}</h2>
    <p>{{ project.description }}</p>
  </div>
  `,
  props: ['project'],
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    onCardClick() {
      this.isOpen = !this.isOpen
      // the ref attribute stores the element in the
      // components this.$refs object, and can get
      // accessed through the name provided
      this.$refs.card.style.setProperty('height', this.isOpen ? '100%' : '93px')
    },
    removeCard() {
      this.$store.commit('removeProject', this.project)
    }
  }
}