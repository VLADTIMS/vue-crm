<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div
      v-else
      class="row"
    >
      <Budget />

      <Currency />
    </div>
  </div>
</template>

<script>
import Budget from "../components/Budget";
import Currency from "../components/Currency";

export default {
  name: "home",
  data: () => ({
    loading: true,
    currency: null,
  }),
  components: {
    Budget,
    Currency,
  },
};
</script>
