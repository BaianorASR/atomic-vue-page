<template>
  <a class="social-link-atom" :href="to" target="_blank">
    <em :class="icon"></em>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialLinkAtom",
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    icon() {
      return `ph-${this.name.toLowerCase()}-logo-bold`;
    },
  },
});
</script>

<style lang="scss" scoped>
.social-link-atom {
  background-color: $color-primary;
  color: white;
  width: 47px;
  height: 47px;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
  em {
    font-size: 25px;
  }
}
</style>
