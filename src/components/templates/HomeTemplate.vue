<template>
  <ContainerBoson class="home-template">
    <HeaderOrganism />
    <PresentationMolecule />
    <ServicesOrganism />
  </ContainerBoson>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContainerBoson from "../bosons/ContainerBoson.vue";
import ServicesOrganism from "../organisms/ServicesOrganism.vue";
import PresentationMolecule from "../molecules/PresentationMolecule.vue";
import HeaderOrganism from "../organisms/HeaderOrganism.vue";

export default defineComponent({
  components: {
    ContainerBoson,
    ServicesOrganism,
    PresentationMolecule,
    HeaderOrganism,
  },
});
</script>

<style lang="scss" scoped>
.home-template {
  margin: 1rem auto 5rem;
  display: grid;
  grid-gap: 5rem;
}
</style>
