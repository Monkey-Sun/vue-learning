<template>
  <div id="home">
    <div v-if="model">
      <van-tabs>
      <van-tab v-for="(item, index) in model.topTypes" :key = "index" :title="item.plName" />
    </van-tabs>
    <van-swipe :autoplay="3000" :height="120">
      <van-swipe-item v-for="(item, index) in model.midBanners" :key="index">
        <div style="padding:0 15px;margin-top:10px;">
          <img v-lazy="item.imgUrl" width="100%" height="100%" />
        </div>
      </van-swipe-item>
    </van-swipe>
    </div>
  </div>
</template>

<script>
import date_cell from "@/components/date_cell";
import http from "@/http";
import Store from "@/store";
import router from "@/router/index";

export default {
  name: "Home",
  components: { date_cell },
  data() {
    return {
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      active: 0,
      model: null
    };
  },

  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      this.loadData();
    });
  },

  methods: {
    subcomTaped(e) {
      alert(e);
      Store.commit("increment");
    },

    loadData: function() {
      this.$toast.loading({ mask: true, message: `正在加载...` });
      http
        .get("v3/wxappapi/home", {
          userId: 29
        })
        .then(res => {
          this.$toast.clear();
          console.log(res);
          this.model = res.data.Context;
        });
    }
  }
};
</script>

<style lang="">
#home {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>