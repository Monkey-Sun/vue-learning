<template>
  <div id="home">
    <div v-for="(item, index) in items" :key="index">
      <date_cell @cellClickAt="subcomTaped" :item="item" :index="index"/>
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
      active: 0
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
      http.get("v1/home", {
          userId: 29
        })
        .then(res => {
          console.log(res);
          this.$toast.clear();
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