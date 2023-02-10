export const state = () => ({
  colors: "",
});

export const mutations = {
  setBackground(state, colors) {
    state.colors = colors;
  },
};
