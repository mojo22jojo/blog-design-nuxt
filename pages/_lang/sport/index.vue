<script setup>
import { getResultDataGameSport, getImagePosterGame } from "~/services/result";

const { data: dataGameSport } = await getResultDataGameSport();
console.log(toRaw(dataGameSport.value));
</script>
<template>
  <section class="mt-10">
    <div class="grid grid-flow-col justify-stretch max-w-5xl h-10 m-auto">
      <div class="flex items-center w-full">
        <UInput
          icon="i-heroicons-magnifying-glass-20-solid"
          size="sm"
          color="white"
          :trailing="false"
          placeholder="Search..."
          class="w-full"
        />
      </div>
    </div>
    <div
      class="grid grid-cols-2 grid justify-between max-w-5xl m-auto border-b-4 h-32"
    >
      <div class="h-24 max-w-md">
        <p class="h-8 flex items-center">ประเภทของเกม</p>
        <div class="grid grid-rows-2">
          <div class="h-8 grid grid-flow-col justify-stretch items-center">
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-14 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              All</UButton
            >
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-14 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              PC</UButton
            >
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-24 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              MOBILE</UButton
            >
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-20 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              XBOX</UButton
            >
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-32 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              PLAYSTATION</UButton
            >
          </div>
          <div class="h-8 grid justify-start items-center">
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-32 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              PLAYSTATION</UButton
            >
          </div>
        </div>
      </div>
      <!-- ... -->
      <div class="h-24 max-w-md">
        <p class="h-8 grid items-center">หมวดหมู่ของเกมส์</p>
        <div class="grid grid-row-2">
          <div class="h-8 grid grid-flow-col justify-stretch items-center">
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-14 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              All</UButton
            >
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-14 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              PC</UButton
            >
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-24 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              MOBILE</UButton
            >
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-20 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              XBOX</UButton
            >
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-32 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              PLAYSTATION</UButton
            >
          </div>
          <div class="h-8 grid items-center justify-start">
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-32 h-7"
              size="xs"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
            >
              PLAYSTATION</UButton
            >
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6 justify-between max-w-5xl m-auto mt-6">
      <span
        v-for="item in dataGameSport"
        :key="item.id"
        class="flex-col items-center flex justify-center"
      >
        <div class="relative flex-col items-center flex justify-center">
          <img
            :src="getImagePosterGame(item.providerName)"
            alt=""
            srcset=""
            class="w-36 h-44 rounded-lg"
          />
          <div
            class="rounded-lg flex-col items-center flex justify-center w-full h-full hover:opacity-100 opacity-0 absolute bg-hover"
          >
            <UButton
              icon="i-simple-line-icons-control-play"
              size="2xs"
              class="text-sm w-18 h-18 text-white m-auto btn btn-blue"
              @click="handleButtonClick"
            >
              เข้าเกม
            </UButton>
          </div>
        </div>

        <p class="mt-1">{{ item.providerName }}</p>
      </span>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}

.bg-hover {
  background-color: rgb(0, 0, 0, 0.7);
}
</style>
