<template>
  <q-page class="column q-gutter-y-lg justify-center bg-dark text-white q-pb-xl" padding>
    <span class="self-center text-h2 text-weight-bolder q-my-xl">What i do</span>
    <div :class="Platform.is.mobile ? 'column' : 'row'">
      <img class="col" src="https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=600" :style="Platform.is.mobile ? 'width: 100%' : '' "/>
      <div class="col column q-gutter-y-lg q-px-md">
        <span class="text-h4 text-weight-bolder">Todo List APP</span>
        <span class="text-h6 text-weight-regular">
          Introducing the Todo List App, powered by Vue.js. This application seamlessly blends simplicity with functionality, allowing users to organize tasks effortlessly. With a clean and intuitive user interface, managing your to-do list becomes a streamlined experience. Embrace productivity and clarity as you navigate through your daily tasks, all made possible through the efficiency of Vue.js technology.
        </span>
        <div class="row self-start q-gutter-x-lg">
          <q-btn flat rounded padding="none" icon="mdi-github" />
          <q-btn flat rounded padding="none" icon="mdi-web" />
        </div>
      </div>
    </div>


    <div :class="Platform.is.mobile ? 'column reverse' : 'row'">
      <div :class="Platform.is.mobile ? 'column q-gutter-y-lg q-px-md' : 'col column q-gutter-y-lg q-px-md text-right'">
        <span class="text-h4 text-weight-bolder">My Unique App</span>
        <span class="text-h6 text-weight-regular">
Experience unparalleled efficiency with my unique app, ingeniously powered by Vue.js. This innovative application redefines user interaction, offering a seamless blend of functionality and distinctive features. Dive into a world where your tasks and goals are effortlessly managed, creating a personalized and exceptional user experience, all thanks to the advanced capabilities of Vue.js.
        </span>
        <div class="row self-end q-gutter-x-lg">
          <q-btn flat rounded padding="none" icon="mdi-github" />
          <q-btn flat rounded padding="none" icon="mdi-web" />
        </div>
      </div>
      <img class="col" src="https://images.pexels.com/photos/4286932/pexels-photo-4286932.jpeg?auto=compress&cs=tinysrgb&w=600"  :style="Platform.is.mobile ? 'width: 100%' : '' "/>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from 'vue';
import { Platform } from 'quasar';

defineComponent({
  name: 'ServicePage'
})
</script>
