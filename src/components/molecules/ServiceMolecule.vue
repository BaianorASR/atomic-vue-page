<template>
  <div class="service-molecule">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.service-molecule {
  h2 {
    color: $color-pink;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }
  p {
    color: $color-dark;
    line-height: 1.5;
  }
}
</style>
