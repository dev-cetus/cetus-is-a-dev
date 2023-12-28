<script lang="ts" setup>
defineProps<{
  url: string
  image: string
  title: string
  target: string
}>()
</script>

<template>
  <div class="group relative">
    <NuxtLink :to="url" :target="target">
      <NuxtImg
        :src="image"
        :alt="title"
        width="500"
        height="300"
        sizes="90vw"
        class="relative h-[300px] w-[500px] rounded-lg bg-black shadow-inner transition-all group-hover:z-40 group-hover:scale-125"
      >
      </NuxtImg>
      <div
        class="absolute inset-0 flex items-end justify-start rounded-lg opacity-0 transition-all group-hover:z-40 group-hover:scale-125 group-hover:bg-black/50 group-hover:opacity-100"
      >
        <p class="p-10 font-sans text-3xl font-bold text-white drop-shadow-2xl">{{ title }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
