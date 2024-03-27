<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div 
      v-for="product in products" 
      :key="product.id" 
      class="card"
    >
      <DesignSystemImage
        v-if="product.attributes.medias.data.length"
        :src="product.attributes.medias.data[0].attributes.url"
        :alt="product.attributes.name"
      />
      <div class="p-4">
        <div class="font-bold text-xl mb-2">{{ product.attributes.name }}</div>
        <p class="text-grey">
          {{ product.attributes.price }} €
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Products, ProductsResponse } from '../types/products'
const { find } = useStrapi()

const products = ref<Products>([])

onMounted(async () => {
  const params = {
    populate: '*',
  };
  const response = await find('products', params)
  
  if (response.data) {
    products.value = (response as ProductsResponse).data
  }
})
</script>
