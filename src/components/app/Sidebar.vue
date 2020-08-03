<template>
  <ul
    class="sidenav app-sidenav"
    :class="{open : value}"
  >

    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a
        href="#"
        class="waves-effect waves-orange pointer"
      >{{link.title}}</a>
    </router-link>

  </ul>
</template>

<script>
import locolizeFilter from "@/filters/locolize.filter";

export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: locolizeFilter("Menu_Bill"), url: "/", exact: true },
      { title: locolizeFilter("Menu_History"), url: "/history" },
      { title: locolizeFilter("Menu_Planning"), url: "/planning" },
      { title: locolizeFilter("Menu_NewRecord"), url: "/record" },
      { title: locolizeFilter("Menu_Categories"), url: "/categories" },
    ],
  }),
};
</script>

