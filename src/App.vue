<template>
  <div>
    <NavBarMolecule />
    <SearchFormMolecule />
    <SocialNetworksMolecule />
    <LogoAtom />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LogoAtom } from "@/components/atoms";
import {
  NavBarMolecule,
  SearchFormMolecule,
  SocialNetworksMolecule,
} from "@/components/molecules";

export default defineComponent({
  components: {
    LogoAtom,
    NavBarMolecule,
    SearchFormMolecule,
    SocialNetworksMolecule,
  },
});
</script>
<style scoped></style>
