<script setup>
import { ref } from "vue";
const items = ref([]);
fetch("https://www.melivecode.com/api/attractions")
  .then((res) => res.json())
  .then((result) => {
    items.value = result;
    console.log(result);
  });

import { useSearchNameGame } from "~/utils/SearchNameGame";

const buttonColor = ref("gray");
const catagoryButtonColor = ref("gray");

const gameShow = ref(false);
const typeAllItemsButton = () => {
  buttonColor.value = buttonColor.value === "gray" ? "green" : "gray";
  gameShow.value = !gameShow.value;
};
const catagoryAllButton = () => {
  catagoryButtonColor.value =
    catagoryButtonColor.value === "gray" ? "green" : "gray";
};
onMounted(() => {
  typeAllItemsButton();
});
const { searchProviderName: searchSport, filteredData: filteredDataSport } =
  useSearchNameGame(items);
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
          v-model="searchSport"
        />
      </div>
    </div>
    <div
      class="grid grid-cols-2 grid justify-between max-w-5xl m-auto border-b-4 h-32"
    >
      <div class="h-24 max-w-md">
        <p class="h-8 flex items-center">เลือกทั้งหมด</p>
        <div class="grid grid-rows-2">
          <div class="h-8 grid grid-flow-col justify-stretch items-center">
            <UButton
              icon="i-simple-line-icons-plus"
              class="w-14 h-7"
              size="xs"
              :color="buttonColor"
              @click="typeAllItemsButton"
              :ui="{ rounded: 'rounded-full' }"
            >
              All</UButton
            >
          </div>
        </div>
      </div>
      <!-- ... -->
      <!-- <div class="h-24 max-w-md">
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
          </div>
        </div>
      </div> -->
    </div>
    <div class="grid grid-cols-6 justify-between max-w-5xl m-auto mt-6">
      <span
        v-for="item in items"
        :key="item.id"
        class="flex-col items-center flex justify-center"
        v-if="gameShow"
      >
        <div class="relative flex-col items-center flex justify-center">
          <img
            :src="item.coverimage"
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

        <p class="mt-1">{{ item.name }}</p>
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
