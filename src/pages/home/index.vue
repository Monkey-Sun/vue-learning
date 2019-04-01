<template>
  <div id="home">
    <p>i'm home</p>
    <div v-for="(item, index) in items" :key="index">
      <date_cell @cellClickAt="subcomTaped" :item = "item" :index = "index"/>
    </div>
  </div>
</template>

<script>
import date_cell from "@/components/date_cell";
import  http from "@/http";
import Store from "@/store";

export default {
  name: "Home",
  components: { date_cell },
  data() {
    return {
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    };
  },

  methods: {
    subcomTaped(e) {
      alert(e);
      Store.commit('increment');

      http.get('v1/home', {
        userId:29
      }).then(res =>{
        console.log(res);
      });
    },

    loadData(){
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