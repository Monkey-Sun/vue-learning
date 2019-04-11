<template>
  <div id="app" :style="{ padding: ispush === true ? '44px 0px 0px 0px': '44px 0px' }">
    <div style="position:fixed;width:100%;height:44px;top:0;z-index:1000;">
      <van-nav-bar
        :title="$route.meta.title"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        :left-arrow = "ispush"
      />
    </div>

    <div :hidden="ispush">
      <van-tabbar v-model="active" @change="tabTaped">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search" dot>发现</van-tabbar-item>
        <van-tabbar-item icon="setting-o" info="20">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view transition="fade" transition-mode="out-in" keep-alive/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
      ispush: false
    };
  },

  watch: {
    $route(to, from) {
      let ThisPage = to.name;
      console.log(ThisPage);
      if (
        ThisPage === "home" ||
        ThisPage === "find" ||
        ThisPage === "profile"
      ) {
        this.ispush = false;
      } else {
        this.ispush = true;
      }
    }
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

  computed: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  background-color: rgba(248, 248, 248, 0.966);
}

p {
  padding: 0;
  margin: 0;
}

.div-box {
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

.fade-transition {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
