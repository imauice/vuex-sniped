const store = new Vuex.Store({
  state: {
    orders: []
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders;
    }
  },
  actions: {
    async fetchOrders({ commit }) {
      const response = await axios.get('/orders');
      const orders = response.data;
      commit('setOrders', orders);
    }
  },
  getters: {
    getOrderById: (state) => (id) => {
      return state.orders.find(order => order.id === id);
    }
  }
});
