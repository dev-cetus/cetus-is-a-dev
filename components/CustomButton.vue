<script lang="ts" setup>
defineProps<{
  text: string
  type: 'button' | 'submit' | 'reset'
}>()
</script>

<template>
  <button
    :type="type"
    class="text-md rounded-lg border border-blue-500 bg-black/5 px-4 py-2 text-blue-500 outline-none ring-blue-500 hover:ring-2"
  >
    {{ text }}
  </button>
</template>

<style scoped></style>
