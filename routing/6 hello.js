export const Hello = {
  template:
  `
      <p>
      State Counter Pada Hello :
      {{ counter2 }}
      </p>
  `,
  computed: {
    counter2(){
      return this.$store.state.counter2
    }
  }
}
