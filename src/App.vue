<template>
  <BurgerButton
    :active="isActive"
    :bar-width="80"
    :bar-height="10"
    @click="() => isActive = !isActive"
  />
</template>

<script>
  import BurgerButton from './BurgerButton.vue';

  export default {
    components: { BurgerButton },
    data: () => ({ isActive: false })
  };
</script>
