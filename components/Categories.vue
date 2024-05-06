<script setup lang="ts">
import { siteData } from '@/siteData';

const categories = computed(() => {

  // each item has a tag property that's an string[]

  const allItems = [...siteData.products]
  const allTags = allItems.flatMap(item => 
    item.tags)
  const uniqueTags = [...new Set(allTags)] // Remove duplicates
  return uniqueTags.sort((a, b) => a.localeCompare(b))
})

</script>
<template>
  <section id="categories" class="bg-stone-100 p-5 m-4 shadow-lg">
  <div class="container mx-auto md:max-w-6xl">
    <h1 class="p-3 text-center text-4xl">Categorias</h1>
      <div id="categoriesContainer" class="mx-auto transition-all duration-1000 grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <NuxtLink v-for="tag in categories" :to="`/products/?category=${tag}`" :key="tag" class="w-full h-auto transition-all hover:scale-105">
          <img :src="`/images/categories/${tag.toLowerCase()}.webp`" :alt="tag" class="rounded-lg shadow-lg" />
        </NuxtLink> 
    </div>
  </div>
</section>
</template>