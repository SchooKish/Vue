import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainList: [],
    categoryList: ["Food", "Education", "Transport", "Entertainment"],
  },

  mutations: {
    setMainList: (state, payload) => {
      state.mainList = payload;
    },
    updateMainList: (state, data) => {
      state.mainList.push(data);
    },
    addNewCateg: (state, data) => {
      state.categoryList.push(data);
    },
    deleteItem: (state, index) => {
      state.mainList.splice(index, 1);
    },
    editItem: (state, index) => {
      state.mainList.splice(index.id, 1, index.data);
      console.log(index);
    },
  },

  getters: {
    getMainList: (state) => state.mainList,
    getCategoryList: (state) => state.categoryList,
  },

  actions: {
    fetchData({ commit }) {
      return axios("http://localhost:3000/costs", {
        method: "GET",
      })
        .then((mainList) => {
          commit("setMainList", mainList.data);
          return mainList;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
});
