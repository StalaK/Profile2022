<script setup>

import Navbar from './Navbar.vue'

</script>

<template>
    <div id="base">
        <Navbar />
        <slot></slot>
    </div>
</template>

<style scoped>

#content {
  padding: 50px;
  background-color: aquamarine;
  border: 5px solid black;
  border-radius: 20px;
  box-shadow: 10px 10px black;
}

</style>