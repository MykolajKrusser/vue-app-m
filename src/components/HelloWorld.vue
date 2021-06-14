<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="plus">count is: {{ count }}</button>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  methods:{
    plus(){
      this.$store.dispatch('plus')
    }
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
      msg: state => state.msg
    })
  },
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
