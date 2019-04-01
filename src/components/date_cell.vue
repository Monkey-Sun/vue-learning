<template>
  <div>
    <div class="cell" @click="cellTaped">
      <p>标题</p>
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:["item", "index"],
  methods: {
    cellTaped() {
      this.$emit("cellClickAt", `你点我干嘛?${this.index}`);
    }
  }
};
</script>

<style lang="">
.cell {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>