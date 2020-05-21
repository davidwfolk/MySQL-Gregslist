<template>
  <div class="Houses">
    <form @submit.prevent="createHouse()">
      <div class="form-group">
        <label for="bedrooms">Bedrooms</label>
        <input
          type="text"
          name="make"
          class="form-control"
          placeholder="Enter bedrooms...."
          v-model="newHouse.bedrooms"
        />
      </div>
      <div class="form-group">
        <label for="bathrooms">Bathrooms</label>
        <input
          type="text"
          name="model"
          class="form-control"
          placeholder="Enter bathrooms...."
          v-model="newHouse.bathrooms"
        />
      </div>
      <div class="form-group">
        <label for="year">year built</label>
        <input
          type="number"
          name="year"
          class="form-control"
          placeholder="Enter year built...."
          v-model="newHouse.yearBuilt"
        />
      </div>
      <div class="form-group">
        <label for="price">price</label>
        <input
          type="number"
          name="price"
          class="form-control"
          placeholder="Enter price...."
          v-model="newHouse.price"
        />
      </div>
      <div class="form-group">
        <label for="imgUrl">imgUrl</label>
        <input
          type="text"
          name="imgUrl"
          class="form-control"
          placeholder="Enter imgUrl...."
          v-model="newHouse.imgUrl"
        />
      </div>
      <div class="form-group">
        <label for="body">description</label>
        <input
          type="text"
          name="body"
          class="form-control"
          placeholder="Enter description...."
          v-model="newHouse.body"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add House</button>
    </form>
    <div class="row justify-content-center">
      <div class="col-3 m-3 border rounded" v-for="house in houses" :key="house.id">
        <h5>No. of Bedrooms {{house.bedrooms}}</h5>
        <h5>No. of Bathrooms {{house.bathrooms}}</h5> 
        <img :src="house.imgUrl" class="img-fluid" alt srcset />
        <h5>Price {{house.price}}</h5>
        <h5>Year Built {{house.yearBuilt}}</h5>
        <h5>Description {{house.body}}</h5>
        <button class="btn btn-danger btn-block" @click="deleteHouse(house.id)">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Houses",
  data() {
    return {
      newHouse: {}
    };
  },
  mounted() {
    this.$store.dispatch("getHouses");
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  methods: {
    createHouse() {
      this.newHouse.yearBuilt = +this.newHouse.yearBuilt;
      this.newHouse.price = +this.newHouse.price;
      this.$store.dispatch("createHouse", this.newHouse);
    },
    deleteHouse(houseId) {
      this.$store.dispatch("deleteHouse", houseId);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>