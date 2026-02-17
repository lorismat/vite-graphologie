<script setup>
const props = defineProps({
  text: String
})
</script>

<template>
  <h1>Slide 0</h1>
  <p>{{ text }}</p>
</template>