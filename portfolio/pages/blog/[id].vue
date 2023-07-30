<template>
  <div>
    We are inside a blog!
  </div>
  <div>
    Post id is {{ route.params.id }}
  </div>
</template>

<script setup>
const route = useRoute()
// console.log(route)
</script>