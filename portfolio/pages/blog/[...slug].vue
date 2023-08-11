<template>
  <article class="prose dark:prose-invert">
    <ContentDoc />
  </article>
</template>

<script setup>
const route = useRoute()
console.log(route.path)
</script>