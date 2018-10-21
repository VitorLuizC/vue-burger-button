<template functional>
  <button
    v-bind="data.attrs"
    v-on="data.on"
    :aria-expanded="props.active ? 'true' : 'false'"
    :class="[
      'burguer-button',
      { '-active': props.active },
      data.class,
      data.staticClass,
    ]"
    :style="{
      width: props.barWidth + 'px',
      height: props.barHeight * 6 + 'px'
    }"
    aria-label="Menu"
    aria-controls="navigation"
  >
    <span
      class="bar"
      v-for="index in 3"
      :key="index"
      :style="{
        width: props.barWidth + 'px',
        height: props.barHeight + 'px',
        backgroundColor: props.barColor
      }"
    />
  </button>
</template>

<script>
  export default {
    name: 'BurgerButton',
    props: {
      active: Boolean,
      barWidth: {
        type: Number,
        default: 80
      },
      barHeight: {
        type: Number,
        default: 10
      },
      barColor: {
        type: String,
        default: '#000000'
      }
    }
  };
</script>

<style src="./BurgerButton.styl" lang="stylus" />
