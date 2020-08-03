export default {
  state: {

  },
  mutations: {

  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER
      // const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`)
      return await res.json()
    }
  },
  getters: {

  }
}