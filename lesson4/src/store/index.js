import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainList: [],
    categoryList: ["Food", "Transport", "Entertainment", "Health"],
  },

  mutations: {
    setMainList(state, payload) {
      state.mainList = payload;
    },
    updateMainList: (state, data) => {
      state.mainList.push(data);
    },
    addNewCateg: (state, data) => {
      state.categoryList.push(data);
    },
  },

  getters: {
    getMainList: (state) => state.mainList,
    getCategoryList: (state) => state.categoryList,
  },

  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 56; i++) {
            items.push({
              date: "2021-05-20",
              category: "Food",
              price: i,
            });
          }
          resolve(items);
        }, 2000);
      }).then((res) => {
        commit("setMainList", res);
      });
    },
  },
});
