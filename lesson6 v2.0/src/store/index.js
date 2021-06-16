import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const localDB = {
  page1: [
    { id: 1, date: "20.03.2020", category: "Food", price: 169 },
    { id: 2, date: "21.03.2020", category: "Navigation", price: 50 },
    { id: 3, date: "22.03.2020", category: "Sport", price: 450 },
  ],
  page2: [
    { id: 4, date: "23.03.2020", category: "Entertaiment", price: 969 },
    { id: 5, date: "24.03.2020", category: "Education", price: 1500 },
    { id: 6, date: "25.03.2020", category: "Food", price: 200 },
  ],
  page3: [
    { id: 7, date: "23.03.2020", category: "Entertaiment", price: 969 },
    { id: 8, date: "24.03.2020", category: "Education", price: 1500 },
    { id: 9, date: "25.03.2020", category: "Food", price: 200 },
  ],
  page4: [
    { id: 10, date: "23.03.2020", category: "Entertaiment", price: 969 },
    { id: 11, date: "24.03.2020", category: "Education", price: 1500 },
    { id: 12, date: "25.03.2020", category: "Food", price: 200 },
  ],
};

export default new Vuex.Store({
  state: {
    mainList: [],
    mainListIDS: [],

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
    addMainListData(state, payload) {
      const newUniqObj = payload.filter((obj) => {
        return state.mainListIDS.indexOf(obj.id) < 0;
      });

      const uniqIDS = newUniqObj.map((obj) => obj.id);
      state.mainListIDS.push(...uniqIDS);
      state.mainList.push(...newUniqObj);
    },
    deleteItem: (state, index) => {
      state.mainList.splice(index, 1);
    },
    editItem: (state, index) => {
      state.mainList.splice(index.id, 1, index.data);
    },
  },

  getters: {
    getMainList: (state) => state.mainList,
    getCategoryList: (state) => state.categoryList,
  },

  actions: {
    fetchData({ commit }, page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = localDB[`page${page}`];
          resolve(items);
        }, 100);
      }).then((res) => {
        commit("addMainListData", res);
      });
    },

    // deleteElemList: ({ commit }, index) => {
    //   commit("removeElemList", index);
    // },

    // editElemList: ({ commit }, index) => {
    //   commit("redactElemList", index);
    // },
  },
});
