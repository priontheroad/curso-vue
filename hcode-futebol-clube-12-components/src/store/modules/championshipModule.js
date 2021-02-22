export default {
  state: {
    championship: "Campeonato Brasileiro",
  },
  getters: {
    getChampionShip(state) {
      return state.championship;
    },
  },
  mutations: {
    setChampionship(state, newValue) {
      state.championship = newValue;
    },
  },
  actions: {
    changeChampionship(context, value) {
      context.commit("setChampionship", value);
    },
  },
};
