import TestComponent from './components/TestComponent.vue';
import store from './store/amagoStore';

Vue.use(store);

new Vue({
  el: '#app',
  components: {
    TestComponent,
  },
  data() {
    return {
      name: 'Yan Index',
    };
  },
  mounted() {
    console.log(this.$store);
  },
})
