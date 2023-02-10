export const state = () => ({
  name: "",
});

export const mutations = {
  setProvider(state, name) {
    state.name = name;
  },
};
