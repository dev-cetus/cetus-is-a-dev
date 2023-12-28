<script lang="ts" setup></script>

<template>
  <header class="fixed z-50 w-full bg-black/40">
    <nav class="mx-auto space-x-6 py-6 text-center">
      <NuxtLink to="#contact" class="hover:underline">
        <Icon name="mdi:phone" />
        <span class="ml-1">Contact</span>
      </NuxtLink>
      <NuxtLink to="https://github.com/dev-cetus" class="hover:underline" target="_blank">
        <Icon name="mdi:github" />
        <span class="ml-1">GitHub</span>
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped></style>
