<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">
      Summary
    </h1>
    <div>
      <USelectMenu :options="transactionViewOptions" v-model="selectedView" />
    </div>
  </section>
</template>

<script setup>
import { transactionViewOptions } from '~/constants'
const selectedView = ref(transactionViewOptions[1])
</script>