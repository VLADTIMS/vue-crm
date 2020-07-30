<template>
  <div class="app-main-layout">

    <Navbar @move-sidebar="sidebarIsOpen = !sidebarIsOpen" />

    <Sidebar v-model="sidebarIsOpen" />

    <main
      class="app-content"
      :class="{full: !sidebarIsOpen}"
    >
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link
        class="btn-floating btn-large blue"
        to="/record"
      >
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";

export default {
  name: "main-layout",
  data: () => ({
    sidebarIsOpen: true,
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
  components: {
    Navbar,
    Sidebar,
  },
};
</script>