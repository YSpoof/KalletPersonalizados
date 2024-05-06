<script setup lang="ts">
import { siteData } from '@/siteData';
import { computed, reactive, ref } from 'vue';

const props = defineProps({
  limit: {
    type: Number,
    default: siteData.products.length
  },
  filter: {
    type: String,
    default: ''
  }
})

const filteredProducts = computed(() => {
  const products = siteData.products.slice(0, props.limit);
  if (props.filter.toLowerCase() === 'todos') {
    return products;
  }
  return products.filter(product => product.tags.includes(props.filter));
})

const rootEl = ref<HTMLElement | null>(null)

defineExpose({
  rootEl
})

const scrollToTop = () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const state = reactive({
  isOpen: false
})

const handleDialogImage = (event: MouseEvent) => {
  const dialog = rootEl.value?.querySelector('dialog');
  const target = event.target as HTMLImageElement;
  if (state.isOpen) {
    dialog?.close();
    state.isOpen = false;
  } else {
    const img = dialog?.querySelector('img');
    img?.setAttribute('src', target.src);
    dialog?.showModal();
    state.isOpen = true;
  }
}

</script>

<template>
  <section ref="rootEl" id="products" class="bg-stone-100 p-5 m-4 shadow-lg">
    <h1 class="p-3 text-center text-4xl">Produtos</h1>
      <main v-if="filteredProducts.length" class="grid grid-cols-1 w-full md:grid-cols-3 gap-4 container mx-auto my-4 bg-transparent">
        <article v-for="product in filteredProducts" class="bg-[#f1f1f1] p-1 rounded shadow-md hover:scale-[1.02] transition-all w-full text-center md:text-left">
        <img @click="handleDialogImage" class="rounded-t-lg mx-auto object-cover cursor-pointer" width="720" height="720" :src="product.image" :alt="product.title" loading="lazy">
          <div class="p-2 md:p-1 ml-1">
            <a :href="product.link" target="_blank" class="block">
            <div class="flex just justify-between items-center">
                <p>
                  {{ product.title }}
                </p>
                <p> {{  product.price }}</p>
              </div>
              <p class="font-light text-balance mt-0.5 text-sm md:text-base">Tipo: {{ product.tags.join(', ') }}</p>
            </a>
          </div>
        </article>
      </main>
    <p v-else class="text-center text-2xl font-bold">Nenhuma foto encontrada com a tag: {{ filter }}</p>
    <div v-if="filteredProducts.length" class="mx-auto py-4 mt-4 grid place-items-center">
        <button @click="scrollToTop()" class="text-xl px-5 py-2 bg-blue-600 hover:bg-blue-800 rounded uppercase text-white shadow-md">Voltar ao topo</button>
    </div>
    <dialog @click="handleDialogImage" class="bg-transparent max-w-full max-h-full open:animate-modalf open:flex focus-visible:outline-none backdrop:bg-black/75 backdrop-blur-sm items-center justify-center overflow-clip">
      <img src="" alt="" class="w-screen md:max-w-fit md:max-h-screen object-cover" />
    </dialog>
  </section>
</template>