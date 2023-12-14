<style lang="sass" scoped>
img
  -webkit-filter: brightness(110%) contrast(102%) grayscale(84%)
  filter: brightness(110%) contrast(102%) grayscale(84%)
  width: 100%
</style>

<template>
  <q-page class="column justify-center bg-dark text-white q-pb-xl" padding>
    <div :class="Platform.is.mobile ? 'column q-gutter-y-lg' : 'row'">
      <img
        :class="!Platform.is.mobile ? 'col-4' : ''"
        src="~assets/picture.png"
      />
      <div :class="Platform.is.mobile ? 'column justify-center items-center' : 'col column justify-center items-center'">
          <span v-if="Platform.is.mobile" class="text-h4">HI! I'm</span>
          <span v-if="Platform.is.mobile" class="text-h3">Robert Quijano</span>
        <div v-if="!Platform.is.mobile" class="column">
          <span class="text-h3">HI! I'm</span>
          <span class="text-h1">Robert Quijano</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from 'vue'
import { Platform } from 'quasar';

defineComponent({
  name: 'IndexPage'
})
</script>
