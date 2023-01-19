export const state = () => ({
  data: [],
  visible: true,
  log: false,
});

export const mutations = {
  visible(state, bool) {
    state.visible = bool;
  },
  inLogin(state, bool) {
    state.log = bool;
  },
};
