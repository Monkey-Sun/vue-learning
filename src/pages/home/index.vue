<template>
  <div id="home">
    <div v-if="model">
      <van-tabs>
        <van-tab v-for="(item, index) in model.topTypes" :key="index" :title="item.plName"/>
      </van-tabs>
      <van-swipe :autoplay="3000" :height="120">
        <van-swipe-item v-for="(item, index) in model.midBanners" :key="index">
          <div style="padding:0 15px;margin-top:10px;">
            <img
              v-lazy="item.imgUrl"
              width="100%"
              height="100%"
              style="border-radius:10px;"
              @click="imageTaped"
            >
          </div>
        </van-swipe-item>
      </van-swipe>
<!-- 中间的集合视图 -->
      <div style="margin-bottom: 10px;">
        <div id="collection_div">
          <div
            style="display:flex;flex-direction:column;align-items:center;"
            v-for="(item, index) in collections"
            :key="index"
            v-if="index < 4"
          >
            <img v-lazy="item.image" alt width="52px" height="52px">
            <p
              style="font-family: PingFang-SC-Medium;font-size: 12px;color: #333333;"
            >{{ item.title }}</p>
          </div>
        </div>
        <div id="collection_div">
          <div
            style="display:flex;flex-direction:column;align-items:center;"
            v-for="(item, index) in collections"
            :key="index"
            v-if="index > 3"
          >
            <img :src="item.image" alt width="52px" height="52px">
            <p
              style="font-family: PingFang-SC-Medium;font-size: 12px;color: #333333;"
            >{{ item.title }}</p>
          </div>
        </div>
      </div>

      <div id="live-box">
        <div style="padding:5px 15px;">
           <img src="http://img.inongjia.net/wxapp/images/ic_home_zbj.png" width="87px">
        </div>
        <div id="live-items-box">
          <div v-for="(item, index) in model.livesvm" :key="index" style="margin:0 6px;">
            <div class="live-cover" :style="{ backgroundImage:'url('+ item.cover +')' }">
              <img src="http://img.inongjia.net/wxapp/images/ic_common_sign_play@3x.png" width="30px" height="30px" alt="">
            </div>
            <p style="font-family: PingFangHK-Light;font-size: 12px;color: #333333;">{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import http from "@/http";
import Store from "@/store";
import router from "@/router/index";
import home_goods_cell from "@/components/home_goods_cell";
const imgherf = "http://img.inongjia.net/wxapp/images/";

export default {
  name: "Home",
  components: {
    home_goods_cell
  },
  data() {
    return {
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      active: 0,
      collections: [
        {
          image: imgherf + "home_vip_ic.png",
          title: "农佳VIP"
        },
        {
          image: imgherf + "home_xrzq_ic_01.png",
          title: "新人专区"
        },
        {
          image: imgherf + "home_jp_ic.png",
          title: "农佳精品"
        },
        {
          image: imgherf + "home_live_ic.png",
          title: "农佳直播"
        },
        {
          image: imgherf + "home_paoma_icon.png",
          title: "跑马场"
        },
        {
          image: imgherf + "home_zhuanpan_ic.png",
          title: "每日抽奖"
        },
        {
          image: imgherf + "home_fudai_ic.png",
          title: "农佳福袋"
        },
        {
          image: imgherf + "home_yue_zone.png",
          title: "余额专区"
        }
      ],
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

    imageTaped: function() {
      alert(this.$root.text);
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

#collection_div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 15px;
  background-color: white;
}

#live-box{
  display: flex;
  flex-direction: column;
}

#live-items-box{
  display: flex;
  overflow-x:scroll;
  padding: 0 8px;
}

.live-cover{
  width: 197px;
  height: 131px;
  background-repeat :no-repeat;
  background-size:cover;
  border-radius: 10px; 
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>