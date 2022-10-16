<template>
  <div class="services-organism">
    <ServiceMolecule
      v-for="service in $getAllServices"
      :key="service.id"
      :title="service.title"
      :description="service.description"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServiceMolecule from "../molecules/ServiceMolecule.vue";

import { mapState } from "pinia";
import { servicesStore } from "@/stores/services";

export default defineComponent({
  components: { ServiceMolecule },

  computed: {
    ...mapState(servicesStore, ["$getAllServices"]),
  },
});
</script>

<style lang="scss" scoped>
.services-organism {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin: 1rem;
}
</style>
