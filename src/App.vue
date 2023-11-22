<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <div class=" bg-gray-200">
    <div class="text-center py-2 md:py-6">
      <span class="text-lg md:text-2xl uppercase font-medium  text-white bg-slate-500 p-2 md:p-3 rounded-lg">user list management system</span>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
