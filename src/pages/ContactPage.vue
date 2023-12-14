<template>
  <q-page class="column justify-center bg-dark text-white q-pb-xl" padding>
    <div :class="Platform.is.mobile ? 'column q-gutter-y-lg' : 'row q-gutter-x-lg'">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.735177478942!2d123.9399794084218!3d10.282908755079081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99b884f54d751%3A0x8006c969d17bd917!2sHaniyyah%20Homes%20Subdivision%20Phase%202!5e0!3m2!1sen!2sph!4v1702561728001!5m2!1sen!2sph" :width="Platform.is.mobile ? '100%' : '600'" height="395" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="col column q-gutter-y-lg">
        <div class="row q-gutter-x-md">
          <q-input class="col bg-grey-9 text-grey-9" v-model="form.name" label="Your name" standout="bg-grey-9 text-grey-9" label-color="grey-1" color="grey-9"/>
          <q-input class="col bg-grey-9 text-grey-9" v-model="form.address" label="Your address" standout="bg-grey-9 text-grey-9" label-color="grey-1" color="grey-9" outlined/>
        </div>
        <q-input class="bg-grey-9 text-grey-9" v-model="form.email" label="Your email" standout="bg-grey-9 text-grey-9" label-color="grey-1" color="grey-9" outlined/>
        <q-input class="bg-grey-9 text-grey-9" v-model="form.message" label="Your message" type="textarea" standout="bg-grey-9 text-grey-9" label-color="grey-1" color="grey-9" outlined/>
        <q-btn color="teal-7" label="submit" @click="submitForm"/>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { Notify, Platform } from 'quasar';

const form = ref({
  name: '',
  address: '',
  email: '',
  message: '',
});

const submitForm = () => {
  Notify.create({
    message: 'You message has been sent, Thank you for you support',
    position: 'top',
    type: 'positive',
    timeout: 3100,
    progress: true
  })
}
</script>
