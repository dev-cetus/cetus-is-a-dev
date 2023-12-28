<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'text',
  },
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
  <input
    :type="type"
    :placeholder="placeholder"
    autocomplete="off"
    :value="modelValue"
    class="text-md w-full rounded-lg border border-gray-800 bg-black/5 px-4 py-2 outline-none ring-blue-500 focus:ring-4"
    :maxlength="max"
    :required="required"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped></style>
