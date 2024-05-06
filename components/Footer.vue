<script setup lang="ts">
import { siteData } from '@/siteData';
</script>

<template>
<footer class="bg-gradient-to-r from-stone-950 to-stone-700 text-center py-4 mt-4 text-white font-normal">
    <a class="text-2xl hover:text-blue-600 flex justify-center gap-2 text-center" :href="siteData.socials.instagram" target="_blank"><Icon name="mdi:instagram" size="30px" /><span>Nosso Instagram</span></a>
  
  <p class="mt-2">Copyright © 2025 - <span class="ml-auto">Desenvolvido por <a href="https://lzart.com.br" target="_blank" class="underline">LZArt</a></span></p>
</footer>
</template>