<script lang="ts" setup>
defineProps({
  message: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="rounded bg-green-500 px-4 py-2">
    <Icon name="mdi:check-circle" class="mr-1" />
    {{ message }}
  </div>
</template>

<style scoped></style>
