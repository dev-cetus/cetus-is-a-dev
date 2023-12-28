<script lang="ts" setup>
defineProps({
  message: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="rounded bg-red-500 px-4 py-2">
    <Icon name="mdi:alert-circle" class="mr-1" />
    {{ message }}
  </div>
</template>

<style scoped></style>
