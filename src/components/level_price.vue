<template>
  <div style="display:flex;flex-direction:column;">
    <div style="display:flex;align-items:center;">
      <p style="font-family: PingFangHK-Semibold;font-size: 22px;color: #E97459;">￥{{ (price * 0.9).toFixed(1) }}</p>
      <img
        src="http://img.inongjia.net/wxapp/images/wx_level_1.png"
        width="36px;"
        height="19px;"
        alt
      >
    </div>
    <div style="display:flex;align-items:center;">
      <p style="font-family: PingFangSC-Regular;font-size: 10px;color: #999999;">￥{{ price.toFixed(1) }}</p>
      <img
        src="http://img.inongjia.net/wxapp/images/wx_level_0.png"
        width="36px;"
        height="19px;"
        alt
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: null
  }
};
</script>

<style lang="">
</style>