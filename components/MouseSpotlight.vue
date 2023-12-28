<script lang="ts" setup>
function randomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

onMounted(() => {
  const spotlight = document.getElementById('spotlight')
  if (spotlight) {
    spotlight.style.backgroundColor = randomColor()
    document.addEventListener('mousemove', e => {
      spotlight.style.left = e.pageX - 40 + 'px'
      spotlight.style.top = e.pageY - 40 + 'px'
    })
  }
})
</script>

<template>
  <div id="spotlight" class="absolute h-[80px] w-[80px] rounded-full blur-3xl"></div>
</template>

<style scoped></style>
