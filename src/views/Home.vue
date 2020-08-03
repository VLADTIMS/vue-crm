<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">
      <Budget :rates="currency.rates" />

      <Currency :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>

<script>
import Budget from "../components/Budget";
import Currency from "../components/Currency";

export default {
  name: "home",
  metaInfo() {
    return {
      title: this.$title("Menu_Bill"),
    };
  },
  data: () => ({
    loading: true,
    currency: null,
  }),
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
    this.loading = false;
  },
  components: {
    Budget,
    Currency,
  },
  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch("fetchCurrency");
      this.loading = false;
    },
  },
};
</script>
