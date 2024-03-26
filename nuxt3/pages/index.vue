<template>
  <div>
    {{ response.data }}
  </div>
</template>

<script setup lang="ts">
const { find } = useStrapi()

const response = await find('products')
</script>