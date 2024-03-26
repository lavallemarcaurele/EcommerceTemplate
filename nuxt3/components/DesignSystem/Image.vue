<template>
  <NuxtImg :src="fullUrl" :alt="alt" />
</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
  alt: String,
})

const config = useRuntimeConfig()
const fullUrl = computed(() => `${config.public.strapiUrl}${props.src}`)
</script>
