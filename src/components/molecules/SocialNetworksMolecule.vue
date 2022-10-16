<template>
  <div class="social-networks-molecule">
    <SocialLinkAtom to="https://www.github.com/BaianorASR" name="Github" />
    <SocialLinkAtom to="https://www.facebook.com/BaianorASR" name="Facebook" />
    <SocialLinkAtom to="https://twitter.com/BaianorASR" name="Twitter" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SocialLinkAtom } from "@/components/atoms";

export default defineComponent({ components: { SocialLinkAtom } });
</script>

<style lang="scss" scoped>
.social-networks-molecule {
  display: grid;
  grid-gap: 1rem;
}
</style>
