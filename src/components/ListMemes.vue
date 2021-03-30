<template>
  <h2 class="m-5">{{ title }}</h2>

  <div class="total-show">
    <select class="form-select" @change="changeTotalShowMemes">
      <option value="" selected>Mostrar Todos</option>
      <option value="5">Solo 5 memes</option>
      <option value="10">Solo 10 memes</option>
      <option value="15">Solo 15 memes</option>
      <option value="20">Solo 20 memes</option>
    </select>
  </div>

  <div class="row">
    <template v-for="meme of memes" : key="meme.id">
      <CardMeme :meme="meme" />
    </template>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import CardMeme from "./CardMeme";

export default {
  components: {
    CardMeme,
  },
  setup() {
    const store = useStore();
    // Mantener/actualizar estado / Datos Reactivos
    const memes = computed(() => store.state.memes);

    onMounted(() => {
      store.dispatch("getMemes");
    });

    const changeTotalShowMemes = (e) => {
      store.dispatch("getMemes", {
        total: e.target.value,
      });
    };

    return {
      title: store.state.titleApp,
      memes,
      changeTotalShowMemes,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.total-show {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
}
</style>