<script setup lang="ts">
</script>
<template>
  <Header />
  <section id="notFound" class="px-8 py-8 shadow-xl h-[30dvh] md:h-dvh bg-[url('/images/hero.webp')] bg-cover bg-center grid place-items-center">
  <div class="text-center bg-stone-400/75 p-4 rounded-xl transition-all hover:scale-105">
    <h1 class="p-2 text-4xl">Oops, página não encontrada.</h1>
    <p class="text-center text-lg"><NuxtLink to="/" class="underline cursor-pointer">Clique aqui</NuxtLink> para voltar ao início.</p>
  </div>
</section>
<Footer />
</template>