<template>
    <div>
        <div>{{ productid }}</div>
    </div>
</template>

<script>
export default {
    name:"goods_detail",
    data() {
        return {
            productid: this.$route.params.productid
        }
    },

    mounted(){
        // console.log(this.$route.params.productid)
    }
}
</script>

<style lang="">
    
</style>