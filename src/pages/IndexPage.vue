<style lang="sass" scoped>
img
  -webkit-filter: brightness(110%) contrast(102%) grayscale(84%)
  filter: brightness(110%) contrast(102%) grayscale(84%)
  width: 100%
</style>

<template>
  <q-page class="column justify-center bg-dark text-white q-pb-xl" padding>
    <div class="row">
      <img
        class="col-4"
        src="~assets/picture.png"
      />
      <div class="col column justify-center items-center">
        <div class="column">
          <span class="text-h3">HI! I'm</span>
          <span class="text-h1">Robert Quijano</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'IndexPage'
})
</script>
