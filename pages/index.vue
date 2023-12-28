<script lang="ts" setup>
useSeoMeta({
  title: "Cetus's portfolio",
  ogTitle: "Cetus's portfolio",
})
</script>

<template>
  <div>
    <CustomSection title="what i do" class="pt-20">
      <div class="flex grid-cols-2 flex-col space-y-4 md:grid md:gap-10 md:space-y-0">
        <ProjectCard
          url="https://jobs.vexastudio.com"
          target="_blank"
          image="https://jobs.vexastudio.com/vexa_large_image.png"
          title="Vexa Jobs"
        />
        <ProjectCard
          url="https://github.com/SPLRGE/create-ts-app"
          target="_blank"
          image="https://socialify.git.ci/SPLRGE/create-ts-app/image?description=1&font=Source%20Code%20Pro&language=1&name=1&owner=1&pattern=Solid&theme=Dark"
          title="Create TS App"
        />
      </div>
    </CustomSection>
    <CustomSection id="contact" title="contact me">
      <ContactForm />
    </CustomSection>
  </div>
</template>

<style scoped></style>
