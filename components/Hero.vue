<script setup lang="ts">
import { siteData } from '~/siteData';
</script>
<template>
    <section id="hero" class="px-8 py-8 shadow-xl h-[30dvh] md:h-[50dvh] bg-[url('/images/hero.webp')] bg-cover bg-center grid place-items-center">
        <div class="text-center bg-stone-400/75 p-4 rounded-xl transition-all hover:scale-105">
            <h1 class="text-2xl md:text-6xl">{{ siteData.siteName }}</h1>
            <p class="mt-2 md:text-2xl text-balance">{{ siteData.siteTag }}</p>
        </div>
    </section>
</template>