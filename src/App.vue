<template>
  <div id="app">
    <div style="position:fixed;width:100%;height:44px;top:0;">
      <van-nav-bar :title="$route.meta.title" @click-left="onClickLeft" @click-right="onClickRight"/>
    </div>

    <van-tabbar v-model="active" @change="tabTaped">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>发现</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
      text:'根组件的属性'
    };
  },

  mounted() {
    this.$router.push({
      path: "/pages/home/index"
    });
  },

  methods: {
    pop() {
      this.$router.back();
    },

    onClickLeft() {
      history.back();
    },

    onClickRight() {},

    tabTaped(e) {
      switch (e) {
        case 0:
          this.$router.push({
            path: `/pages/home/index`
          });
          break;
        case 1:
          this.$router.push({
            path: `/pages/find/index`
          });
          break;
        default:
          this.$router.push({
            path: `/pages/profile/index`
          });
          break;
      }
    }
  },

  computed: {},
};
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding:44px 0;
  background-color: rgb(230, 230, 230);
}

p{
  padding: 0;
  margin: 0;
}

div{
  padding: 0;
  background-color: white;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

.mutipleline {
  display: -webkit-box;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden; 
  -webkit-box-orient: vertical;
}

</style>
