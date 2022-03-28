import { createStore } from 'vuex'

export default createStore({
  state: {
    adornosPrice: "$4.99",
    saboresPrice: "$24.99",
    adornos: {
      a1: "Velas",
      a2: "Vela de cumpleaños",
      a3: "Graduación",
      a4: "Cumpleaños",
      a5: "Flores",
      a6: "Boda"
    },
    sabores: {
      s1: "Chocolate",
      s2: "Vainilla",
      s3: "Fresa",
      s4: "Limón",
      s5: "Red Velvet",
      s6: "Napolitano",
      s7: "Coco",
      s8: "Zanahoria"
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
