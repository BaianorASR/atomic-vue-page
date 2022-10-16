<template>
  <form class="search-form-molecule">
    <input type="search" placeholder="Buscar" />
    <button type="submit">
      <ph-magnifying-glass color="white" weight="bold" mirrored />
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PhMagnifyingGlass } from "phosphor-vue";
export default defineComponent({
  components: { PhMagnifyingGlass },
});
</script>

<style lang="scss" scoped>
.search-form-molecule {
  position: relative;
  width: max-content;
  input {
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    box-shadow: 0px 5px 5px rgba(#000000, 0.08);
    &::placeholder {
      color: $color-secondary;
    }
  }
  button {
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: $color-primary;
    border: none;
    border-radius: 5rem;
    display: grid;
    justify-items: center;
    align-items: center;
  }
}
</style>
