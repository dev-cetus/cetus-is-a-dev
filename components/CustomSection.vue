<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="flex flex-col items-center py-10">
    <h2 class="py-8 text-4xl font-bold uppercase">{{ title }}</h2>
    <slot />
  </section>
</template>

<style scoped></style>
