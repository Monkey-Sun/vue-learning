<template>
  <div id="home">
    <p>i'm home</p>
    <div v-for="(item, index) in items" :key="index">
      <div class="cell">
        <p>标题</p>
        <p>日期</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Home',
  data() {
    return {
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    };
  }
};
</script>

<style lang="">
#home {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.cell{
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

</style>