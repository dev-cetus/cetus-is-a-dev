<script lang="ts" setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

let result: any

async function submitForm() {
  result = await useLazyFetch<{ statusCode: number; message: string }>('/api/contact', {
    method: 'POST',
    body: JSON.stringify(form.value),
  })
  if (result?.data.value) {
    for (const key in form.value) {
      form.value[key] = ''
    }
  }
}
</script>

<template>
  <form class="space-y-2" @submit.prevent="submitForm">
    <CustomSuccess v-if="result?.data.value" message="Message successfully sent" />
    <CustomError v-else-if="result?.error.value" :message="result.error.value.message" />
    <div class="w-full flex-row space-y-2 md:flex md:gap-2 md:space-y-0">
      <FormInput v-model="form.name" placeholder="Name" />
      <FormInput v-model="form.email" placeholder="Email" type="email" />
    </div>
    <FormInput v-model="form.subject" placeholder="Subject" />
    <FormTextarea v-model="form.message" placeholder="Message" />
    <CustomButton text="send" type="submit" />
  </form>
</template>

<style scoped></style>
