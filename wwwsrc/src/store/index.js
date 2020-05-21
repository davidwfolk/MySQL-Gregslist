import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    cars: [],
    houses: [],
    activeCar: {}
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars
    },
    setCar(state, car) {
      state.activeCar = car
    },
    setHouses(state, houses) {
      state.houses = houses
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    //SECTION Cars
    async createCar({ commit, dispatch }, newCar) {
      let res = await api.post("cars", newCar)
      dispatch("getCars")
    },
    async getCars({ commit, dispatch }) {
      try {
        let res = await api.get("cars")
        commit("setCars", res.data)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async getMyCars({ commit }) {
      let res = await api.get("/cars/user")
      // commit("setMyCars", res.data)
      commit("setCars", res.data)
    },
    async getCar({ commit }, carId) {
      try {
        let res = await api.get("/cars/" + carId)
        console.log("getCar:", res.data)
        commit("setCar", res.data)
      } catch (error) {

      }
    },
    async deleteCar({ dispatch }, carId) {
      try {
        await api.delete("cars/" + carId)
        router.push({ name: "dashboard" })
      } catch (error) {
        alert(JSON.stringify(error.response.data));
      }

    },
    async bidOnCar({ commit }, payload) {
      try {
        let res = await api.put("cars/" + payload.id, payload)
        commit("setCar", res.data)
      } catch (err) {

      }
    },
    // !SECTION End Cars

    // SECTION Houses

    async createHouse({ commit, dispatch }, newHouse) {
      let res = await api.post("houses", newHouse)
      dispatch("getHouses")
    },
    async getHouses({ commit, dispatch }) {
      try {
        let res = await api.get("houses")
        commit("setHouses", res.data)
      } catch (err) {
        alert(JSON.stringify(err));
      }
    },
    async deleteHouse({ dispatch }, carId) {
      try {
        await api.delete("houses/" + carId)
        dispatch("getHouses")
      } catch (error) {
        debugger
        alert(JSON.stringify(error.response.data));
      }

    }

  }
});
