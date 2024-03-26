<template>
  <div v-if="products">
    <div v-for="product in products" :key="product.id">
      {{ product.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ApiProductProduct } from '../types/strapi/contentTypes';

const { find } = useStrapi()

const products = ref<ApiProductProduct[]>([]);

const response = await find<ApiProductProduct[]>('products');

products.value = response.data;

</script>
