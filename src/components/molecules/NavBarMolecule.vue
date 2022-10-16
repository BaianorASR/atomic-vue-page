<template>
  <nav class="nav-bar-molecule">
    <NavItemAtom text="Serviços" to="/services" />
    <NavItemAtom text="Sobre mim" to="/about" />
    <NavItemAtom text="Cases" to="/cases" />
    <NavItemAtom text="Contato" to="/contact" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavItemAtom } from "@/components/atoms";

export default defineComponent({ components: { NavItemAtom } });
</script>

<style lang="scss" scoped>
.nav-bar-molecule {
  width: max-content;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2.5rem;
}
</style>
