<template>
  <section>
    <p>Using default bar width and height.</p>

    <BurgerButton
      :active="isActive"
      @click="() => isActive = !isActive"
    />

    <BurgerButton
      :active="!isActive"
      @click="() => isActive = !isActive"
    />
  </section>
</template>

<script>
  import BurgerButton from '../src/BurgerButton.vue';

  export default {
    components: { BurgerButton },
    data: () => ({ isActive: false })
  };
</script>
