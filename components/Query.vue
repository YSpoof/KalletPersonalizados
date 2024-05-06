<script lang="ts" setup>
import { siteData } from '@/siteData';

const searchModel = defineModel({ default: 'todos'})

const categories = computed(() => {
  // each item has a tag property that's an string[]
  const allItems = [...siteData.products]
  const allTags = allItems.flatMap(item => item.tags)
  const uniqueTags = [...new Set(allTags)] // Remove duplicates
  return uniqueTags.sort((a, b) => a.localeCompare(b))
})

</script>
<template>
  <search class="flex flex-col justify-center items-center pt-4">
    <p>Filtrar por:</p>
    <select v-model="searchModel">
        <option value="todos">Todos</option>
        <option v-for="tag in categories" :key="tag" :value="tag">
          {{ tag }}
        </option>
      </select>
  </search>
</template>