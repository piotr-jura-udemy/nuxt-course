<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        Add Transaction
      </template>

      <UFormGroup :required="true" label="Transaction Type" name="type" class="mb-4">
        <USelect placeholder="Select the transaction type" :options="types" />
      </UFormGroup>

      <UFormGroup label="Amount" :required="true" name="amount" class="mb-4">
        <UInput type="number" placeholder="Amount" />
      </UFormGroup>

      <UFormGroup label="Transaction date" :required="true" name="created_at" class="mb-4">
        <UInput type="date" icon="i-heroicons-calendar-days-20-solid" />
      </UFormGroup>

      <UFormGroup label="Description" hint="Optional" name="description" class="mb-4">
        <UInput placeholder="Description" />
      </UFormGroup>

      <UFormGroup :required="true" label="Category" name="category" class="mb-4">
        <USelect placeholder="Category" :options="categories" />
      </UFormGroup>

      <UButton type="submit" color="black" variant="solid" label="Save" />
    </UCard>
  </UModal>
</template>

<script setup>
import { categories, types } from '~/constants'

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>