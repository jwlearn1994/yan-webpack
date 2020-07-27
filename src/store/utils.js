function createStore(state) {
  return {
    install(Vue) {
      Vue.prototype.$store = Vue.observable(state);
    },
  };
}

export default createStore;
