<template>
  <div class="services-organism">
    <ServiceMolecule
      v-for="service in services"
      :key="service.id"
      :title="service.title"
      :description="service.description"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServiceMolecule from "../molecules/ServiceMolecule.vue";

export default defineComponent({
  components: { ServiceMolecule },
  data: function () {
    return {
      services: [
        {
          id: 1,
          title: "Back-end",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          icon: "fas fa-code",
        },
        {
          id: 2,
          title: "Front-end",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          icon: "fas fa-paint-brush",
        },
        {
          id: 3,
          title: "Full-stack",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          icon: "fas fa-chart-line",
        },
      ],
    };
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
