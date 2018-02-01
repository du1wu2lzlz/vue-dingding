import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
Vue.use(Vuex); 

export default new Vuex.Store({
  state:{

  },
  mutations: {
    //同步
  },
  actions: {
   // 异步
  },
  modules: {
    counter,
  }
});


