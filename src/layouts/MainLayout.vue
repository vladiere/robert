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
          <q-img src="~assets/logo_name.png" width="180px"/>
        </q-toolbar-title>

        <q-space />

        <div class="row q-gutter-x-lg text-h6 q-mr-xl links">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/service">Service</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
</script>
