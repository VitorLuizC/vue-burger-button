<template>
  <button
    :class="['burguer-button', { '-active': active }]"
    :style="style.button"
    :aria-expanded="active ? 'true' : 'false'"
    aria-label="Menu"
    aria-controls="navigation"
    @click.prevent="$emit('click', $event)"
  >
    <span class="bar" v-for="index in 3" :key="index" :style="style.bar" />
  </button>
</template>

<script>
  const px = (value) => String(value) + 'px';

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
    },
    computed: {
      style () {
        return {
          button: {
            width: px(this.barWidth),
            height: px(this.barHeight * 6)
          },
          bar: {
            width: px(this.barWidth),
            height: px(this.barHeight),
            backgroundColor: this.barColor
          }
        };
      }
    }
  };
</script>

<style src="./BurgerButton.styl" lang="stylus" />
