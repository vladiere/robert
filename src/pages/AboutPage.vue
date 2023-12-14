<style lang="sass" scoped>
img
  -webkit-filter: brightness(110%) contrast(102%) grayscale(84%)
  filter: brightness(110%) contrast(102%) grayscale(84%)
</style>

<template>
  <q-page class="column items-center bg-dark text-white q-pb-xl" padding>
    <img src="~assets/picture.png" class="q-mt-xl" />
    <span class="text-h3 q-my-xl text-weight-bolder text-center">About me</span>
    <span class="text-h6 text-weight-regular text-center" style="width: 70%">
Greetings, I'm Robert D. Quijano, a skilled web developer currently associated with Babag LLC. With a profound passion for creating cutting-edge digital solutions, I bring a unique blend of creativity and technical expertise to every project I undertake. Whether it's designing sleek user interfaces or optimizing website functionality, I am committed to delivering top-notch results. For inquiries or collaboration opportunities, please don't hesitate to contact me at quijanor41@gmail.com or reach out directly at #09254856070.
    </span>
  </q-page>
</template>

<script setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'AboutPage'
});
</script>
