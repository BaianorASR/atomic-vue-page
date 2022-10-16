<template>
  <a class="nav-item-atom" :href="to">{{ text }}</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: { type: String, required: true },
    to: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.nav-item-atom {
  color: #293947;
  text-decoration: none;
  font-size: 1.3rem;
}
</style>
