<script setup>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router"
</script>

<template>
  <main>
    <Header />
    <RouterView />
  </main>
</template>
<style scoped>
  main{
    height: 100vh;
    min-height: 100vh;
    background-color: gray;
  }
</style>
