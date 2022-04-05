import { createStore } from 'vuex'

export default createStore({
  state: {
    taste: localStorage.sabor,   
    decoration: localStorage.adorno,
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
    },
    form: {
      name: "",
      tel: "",
      mail: "",
      text: "",
    }
  },
  getters: {
  },
  mutations: {
    nameChange(state, name) {
      state.form.name = name;
    },
    telChange(state, tel) {
      state.form.tel = tel;
    },
    mailChange(state, mail) {
      state.form.mail = mail;
    },
    textChange(state, text) {
      state.form.text = text;
    },
  },
  actions: {
    nameChange({commit}, name) {
      commit("nameChange", name);
    },
    telChange({commit}, tel) {
      commit("telChange", tel);
    },
    mailChange({commit}, mail) {
      commit("mailChange", mail);
    },
    textChange({commit}, text) {
      commit("textChange", text);
    },
  },
  modules: {
  }
})