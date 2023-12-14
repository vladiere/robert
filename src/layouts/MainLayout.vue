<style lang="sass" scoped>
.links a
    text-decoration: none
    color: #fff
    transition: 200ms ease-in
    padding: 2px 5px
    &:hover
      border-bottom: 1px solid #fff
</style>

<template>
  <q-layout view="hhh lpR fFf">

    <q-header class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-img src="~assets/logo_name.png" :width="Platform.is.mobile ? '160px' : '180px'"/>
        </q-toolbar-title>

        <q-space />

        <div class="row q-gutter-x-lg text-h6 q-mr-xl links" v-if="!Platform.is.mobile">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/service">Service</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>

        <q-btn dense flat round icon="menu" @click="rightDrawerOpen = !rightDrawerOpen" v-if="Platform.is.mobile"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-if="Platform.is.mobile" show-if-above v-model="rightDrawerOpen" side="right" bordered dark>
      <q-btn class="q-ma-md" dense flat round icon="mdi-close" @click="rightDrawerOpen = !rightDrawerOpen" v-if="Platform.is.mobile"/>
      <div class="column items-center text-h5 justify-center q-gutter-y-xl links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/service">Service</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { Platform } from 'quasar';

const rightDrawerOpen = ref(false);
</script>
