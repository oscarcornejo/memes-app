import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    titleApp: 'Memes App',
    memes: [],
  },
  mutations: {
    setMemes(state, payload) {
      state.memes = payload;
    },
  },
  actions: {
    async getMemes({ commit }, params) {
      try {
        const urlEndpoint = 'https://api.imgflip.com/get_memes';
        const result = await axios.get(urlEndpoint);

        console.log();
        if (!params?.total) {
          commit('setMemes', result.data.data.memes);
        } else {
          console.log(`Cargando solo ${params.total} memes`);
          const data = result.data.data.memes;

          const resultTemp = [];
          data.forEach((item, index) => {
            if (index < params.total) {
              resultTemp.push(item);
            }
          });

          commit('setMemes', resultTemp);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
  getters: {},
});
