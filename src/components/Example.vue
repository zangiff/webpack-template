<template>
  <section>
    <div class="container">
      <h1>Vue message 2: {{ message }}</h1>
    </div>
  </section>
</template>

<script>
import Example from "~/components/Example.vue"
export default {
  data () {
    return {
      message: null,
    }
  },
  created () {
    this.message = this.$store.getters.getMessage
  }
}
</script>

<style lang="sass" scoped>
h1 {
  color: green;
}
</style>
