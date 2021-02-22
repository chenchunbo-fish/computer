//! 商品信息的 子组件
<template>
    <div id="product">
        <div>
            <!-- 商品图片 -->
            <img :src="'/img/'+item.productImage" alt="" style="width:100px;height:100px">
            <!-- 商品名称 -->
            <p>
            {{item.productName}}
            </p>
            <!-- 商品价格 -->
            <p>
            ￥ {{item.salePrice}}
            </p>
            <!-- 购物车按钮 -->
            <button @click="add(item)">加入购物车</button>
        </div>
    </div>
</template>
<script>
export default {
  //* 接收数值
  props: ["item"],
  methods: {
    add(item) {
      //*状态
      let re = localStorage.getItem("user");
      //*如果登录
      if (re) {
        this.$store.commit("add", item);

        this.$emit("aaa", 1);
      } else {
        this.$emit("aaa", 0);
      }
    }
  } 
};
</script>
<style lang="scss" scoped>
#product {
  width: 200px;
  height: 235px;
  background: #fff;
  margin-top: 70px;
  text-align: center;
}
</style>
