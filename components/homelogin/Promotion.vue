<!-- <script setup>
import { getResultDataGameHits } from "~/services/result";
import { getImagePosterGame } from "~/services/result";

const { data: dataGameHits } = await getResultDataGameHits();
// console.log(dataGameHits);
</script>

<template>
  <section class="h-80 mt-6">
    <div class="flex justify-between max-w-4xl h-10 m-auto mt-6">
      <p class="flex items-center">5 เกมยอดฮิต</p>
      <div class="flex">
        <NuxtLink to="/_lang/promotion" class="flex justify-center">
          <UButton class="justify-center rounded-full w-32">ดูทั้งหมด</UButton>
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-between max-w-4xl m-auto mt-6">
      <span
        v-for="item in dataGameHits"
        :key="item.id"
        class="flex-col items-center flex justify-center"
      >
        <img
          :src="getImagePosterGame(item.providerName)"
          alt=""
          srcset=""
          class="w-36 h-56"
        />
        <p class="mt-1">{{ item.game }}</p>
      </span>
    </div>
  </section>
</template>
<style lang="scss" scoped></style> -->
