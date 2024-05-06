<script setup lang="ts">
import { siteData } from '~/siteData';
const whatsAppMessage = encodeURIComponent('Olá, vim pelo site e gostaria de saber mais sobre os produtos.');
</script>
<template>
  <section id="contact" class="px-8 py-8 shadow-xl grid place-items-center">
    <a class="text-lg md:text-xl px-5 py-3 w-full md:w-fit transition-all bg-blue-600 hover:bg-blue-700 hover:scale-105 rounded uppercase text-white shadow-md text-center" target="_blank" :href="`https://api.whatsapp.com/send?phone=${siteData.whatsapp}&text=${whatsAppMessage}`"><Icon name="mdi:whatsapp" size="1.5em" class="align-top" /> Entrar em contato</a>
  </section>
</template>