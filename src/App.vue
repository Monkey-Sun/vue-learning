<template>
  <div id="app">
    <p>{{ subtitle }}</p>
    <button id="buttonT" v-on:click="clicked">change it</button>
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      subtitle:null
    }
  },

  beforeCreate() {
    console.log("before created");
  },

  created() {
    console.log("be created");
  },

  beforeMount() {
    console.log("before Mount");
  },

  mounted() {
    console.log("Mount");
  },

  beforeUpdate() {
    console.log("before update");
  },

  updated() {
    console.log("updated");
  },

  beforeDestroy() {
    console.log("before destroy");
  },

  destroyed() {
    console.log("destroyed");
  },

  methods: {
    clicked() {
      this.subtitle = 'clicked'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#buttonT {
  border: 1px solid red;
  border-radius: 3px;
}
</style>
