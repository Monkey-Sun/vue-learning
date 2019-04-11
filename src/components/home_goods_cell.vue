<template>
    <div class="content-box" v-if="product !== null" @click="goodsTaped">
        <div style="width:120px;height:120px;flex-shrink:0;margin-right:10px;background-size:cover;" :style="{ backgroundImage:'url(' + product.cover + ')' }">
          <slot></slot>
        </div>

        <div style="display:flex;flex-direction:column;flex-grow:1;justify-content:space-between;">
          <div>
            <p class="mutipleline" style="-webkit-line-clamp: 1;font-family: PingFangHK-Semibold;font-size: 16px;color: #333333;">{{ product.productName }}</p>
            <p class="mutipleline" style="-webkit-line-clamp: 2;font-family: PingFangHK-Regular;font-size: 12px;color: #666666;">{{ product.productDesc }}</p>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;">
            <level_price  :price = "product.price"/>
          </div>

        </div>
    </div>
</template>

<script>
import level_price from '@/components/level_price'
export default {
  props:{
    product:null
  },
  components:{
    level_price
  },
  methods: {
    goodsTaped(){
      this.$emit("goodsTap", `${this.product.productId}`)
    }
  }
};
</script>

<style lang="">
   .content-box{
     padding: 15px;
     display: flex;
   } 
</style>