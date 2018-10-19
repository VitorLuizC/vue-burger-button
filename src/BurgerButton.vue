<template>
  <button
    :class="['BurgerButton', { 'BurgerButton--active': active }]"
    aria-label="Menu"
    aria-controls="navigation"
    :aria-expanded="active ? 'true' : 'false'"
    @click.prevent="$emit('click', $event)"
    :style="{ minWidth: barWidth + 'px', minHeight: barHeight * 4.5 + 'px' }"
  >
    <span
      v-for="index in 3"
      :key="index"
      :style="{ width: barWidth + 'px', height: barHeight + 'px' }"
      class="BurgerButton__bar"
    />
  </button>
</template>

<script>
  const px = (value) => String(value) + 'px'

  export default {
    name: 'BurgerButton',
    props: {
      active: Boolean,
      barWidth: {
        type: Number,
        default: 100
      },
      barHeight: {
        type: Number,
        default: 20
      }
    }
  };
</script>

<style src="./BurgerButton.styl" lang="stylus" />
