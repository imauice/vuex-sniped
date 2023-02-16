export default {
  computed: {
    order() {
      return this.$store.getters.getOrderById(this.orderId);
    }
  },
  created() {
    this.$store.dispatch('fetchOrders');
  }
};
