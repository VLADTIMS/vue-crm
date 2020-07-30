export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER
      console.log(key)
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
      return await res.json()
    }
  },
  getters: {

  }
}