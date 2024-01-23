<script setup>
import { getResultDataGameSport, getImagePosterGame } from "~/services/result";

const { data: dataGameSport } = await getResultDataGameSport();
console.log(toRaw(dataGameSport.value));
</script>

<template>
  <section class="mt-10">
    <div class="flex justify-between max-w-4xl h-10 m-auto">
      <div class="flex items-center">
        <UInput
          icon="i-heroicons-magnifying-glass-20-solid"
          size="sm"
          color="white"
          :trailing="false"
          placeholder="Search..."
          class="flex w-full"
        />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4 justify-between max-w-4xl m-auto mt-6">
      <span
        v-for="item in dataGameSport"
        :key="item.id"
        class="flex-col items-center flex justify-center"
      >
        <img
          :src="getImagePosterGame(item.providerName)"
          alt=""
          srcset=""
          class="w-36 h-44 rounded-lg"
        />
        <p class="mt-1">{{ item.providerName }}</p>
      </span>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
