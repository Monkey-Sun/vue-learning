<template>
  <div>
    <button @click="pop">Back</button>
    <button @click="homeClick">Home</button>
    <button @click="profileClick">Profile</button>
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      subtitle: "1111"
    };
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
    homeClick() {
      console.log("1111");
      this.$router.push({
        path: `/pages/home/index`
      });
    },

    profileClick(){
      this.$router.push({
        path: `/pages/profile/index`
      });
    },

    pop(){
      this.$router.back();
    }
  },

  computed: {
    username() {
      return this.$route;
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
