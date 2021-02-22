import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    //*添加
    add(state, p) {
      console.log(p);
      //* 
      let r = state.cart.findIndex((item) => {
        //*
        return item._id == p._id
      })
      //*判断是否存在|如果存在，数量加1，如果不存在，设置一个属性,加入到购物车（存购物车的数组中去）
      if (r >= 0) {
        let arr = JSON.parse(JSON.stringify(state.cart));
        //* r代表查到的数据的索引值
        arr[r].num++;

        state.cart = arr;
      } else {
        p.num = 1;
        state.cart.push(p)
      }

    }
  },
  actions: {

  },

  plugins: [createPersistedState()]
})
