<template>
  <div class="presentation-molecule">
    <SocialNetworksMolecule />
    <img src="@/assets/images/presentation.svg" alt="presentation" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SocialNetworksMolecule from "./SocialNetworksMolecule.vue";

export default defineComponent({ components: { SocialNetworksMolecule } });
</script>

<style lang="scss" scoped>
.presentation-molecule {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .social-networks-molecule {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  img {
    width: 100%;

    max-width: 650px;
  }
}
</style>
