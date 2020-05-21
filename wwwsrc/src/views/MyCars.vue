<template>
  <div class="my-cars row justify-content-center">
    <div class="col-4 border rounded" v-for="car in cars" :key="car.id">
    <h1>Make: {{car.make}}</h1>
    <h1>Model: {{car.model}}</h1>
    <img class="img-fluid" :src="car.imgUrl" alt />
    <p>Price: {{car.price}}</p>
    <p>Year: {{car.productionYear}}</p>
    <p>{{car.body}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "my-cars",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getMyCars");
  },
  computed: {
    cars() {
      //   return this.$store.state.myCars;
      return this.$store.state.cars;
    }
  },
  methods: {},
  components: {}
};
</script>


<style lang="scss" scoped>
</style>