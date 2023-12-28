<script lang="ts" setup>
defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  max: {
    type: Number,
    default: 1024,
  },
  required: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <textarea
    class="text-md w-full resize-y rounded-lg border border-gray-800 bg-black/5 px-4 py-2 outline-none ring-blue-500 focus:ring-4"
    :placeholder="placeholder"
    :value="modelValue"
    :maxlength="max"
    :required="required"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped></style>
