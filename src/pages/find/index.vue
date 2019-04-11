<template>
  <div>
    <div
      class="div-box"
      style="padding:17.5px;display:flex;flex-direction:column;align-items:stretch;"
    >
      <div v-for="(item, index) in list" :key="index">
        <div style="display:flex;">
          <img
            :src="item.avatar"
            width="40px"
            height="40px"
            style="border-radius:20px;margin-right:10px;"
            alt
          >
          <div style="display:flex;flex-direction:column;">
            <p
              style="font-family: PingFangHK-Regular;font-size: 14px;color: #666666;"
            >{{item.nickname}}</p>
            <p
              style="font-family: PingFangHK-Regular;font-size: 10px;color: #999999;"
            >{{ item.createTime }}</p>
          </div>
        </div>
        <p
          class="mutipleline"
          style="-webkit-line-clamp: 3;margin:10px 0;font-family: PingFangHK-Regular;font-size: 14px;color: #333333;"
        >{{ item.content.textContent }}</p>

        <div style="display:flex;flex-wrap:wrap;">
          <div v-for="(image, iindex) in item.content.photos" :key="iindex">
            <img :src="image.ThumbUrl" width="110px" height="110px" style="margin:7.5px;" alt>
          </div>
        </div>

        <div style="display:flex;padding:5px;background-color:#F4F4F4;">
          <img :src="item.product.cover" width="44px" height="44px" style="margin-right:10px;" alt>
          <div style="display:flex;align-items:center;">
            <p
              class="mutipleline"
              style="-webkit-line-clamp: 2;font-family: PingFangHK-Medium;font-size: 12px;color: #333333;"
            >
              {{item.product.productName}} |
              <span
                style="font-family: PingFangHK-Regular;font-size: 12px;color: #666666;"
              >{{item.product.productDesc}}</span>
            </p>
            <img
              src="http://img.inongjia.net/wxapp/images/userface_more.png"
              width="21px"
              height="21px"
              style="margin-left:30px;"
              alt
            >
          </div>
        </div>

        <div style="display:flex;justify-content: space-between;margin: 10px 0;">
          <div style="display:flex;align-items:center;">
            <div style="display:flex;">
              <div v-for="(user, usindex) in item.users" :key="usindex">
                <img :src="user.avatar" width="28px" height="28px" style="border-radius: 14px;" alt>
              </div>
            </div>
            <p style="margin-left:25px;font-size:10px;color:#666666;">{{item.totalNum}}人购买</p>
          </div>
          <div
            style="background-color:#E97459;text-align:center;line-height:34px;width:90px;height:34px;border-radius:2px;color:white;font-family: PingFangHK-Medium;font-size: 14px;color: #FFFFFF;"
          >我也要</div>
        </div>

        <div style="height:1px;background:#E5E5E5;margin:20px 0;" />
      </div>
    </div>
  </div>
</template>


<script>
import http from "@/http";
export default {
  name: "find",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      this.$toast.loading({ mask: true, message: `正在加载...` });
      var that = this;
      http
        .get("v3/wxappapi/find", {
          userId: "29",
          page: 1
        })
        .then(res => {
          this.$toast.clear();
          for (var index in res.data.Context) {
            var item = res.data.Context[index];
            var obj = JSON.parse(item.content);
            item.content = obj;
            that.list.push(item);
          }
        });
    }
  }
};
</script>

<style lang="">
</style>