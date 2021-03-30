<template>
  <div class="container">
    <ListMemes />
  </div>
</template>

<script>
import { useStore } from "vuex";
import ListMemes from "../components/ListMemes";

export default {
  name: "Home",
  components: {
    ListMemes,
  },
};
</script>
