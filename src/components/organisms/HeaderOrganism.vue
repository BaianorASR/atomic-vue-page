<template>
  <header class="header-organism">
    <LogoAtom />
    <NavBarMolecule />
    <SearchFormMolecule />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LogoAtom } from "@/components/atoms";
import { NavBarMolecule, SearchFormMolecule } from "@/components/molecules";

export default defineComponent({
  components: { LogoAtom, NavBarMolecule, SearchFormMolecule },
});
</script>

<style lang="scss" scoped>
.header-organism {
  width: 100%;
  display: grid;
  grid-template-columns: 160px repeat(2, auto);
  align-items: center;
  justify-content: space-between;
}
</style>
