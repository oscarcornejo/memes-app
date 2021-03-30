<template>
  <div class="col-md-3 meme mb-3">
    <div class="card">
      <img :src="meme.url" class="card-img-top" :alt="meme.name" />
      <div class="image-overlay"></div>

      <div class="card-body">
        <p class="card-title">{{ meme.name }}</p>

        <a :href="meme.url" target="_blank" class="btn btn-primary btn-block"
          >Ver Meme</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meme: Object,
  },
};
</script>

<style lang="scss" scoped>
.meme {
  .card {
    .card-img-top {
      height: 200px;
      object-fit: cover;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 200px;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background: rgba(0, 0, 0, 0.3);
    }

    &:hover {
      .image-overlay {
        opacity: 1;
      }
    }
  }
}
</style>