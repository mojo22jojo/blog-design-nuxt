<script setup lang="ts">
// import Promotion from "~/components/homelogin/Promotion.vue";
// import { ref } from "vue";
const items = ref([]);
fetch("https://www.melivecode.com/api/attractions")
  .then((res) => res.json())
  .then((result) => {
    items.value = result;
    console.log(result);
  });
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]); // นำเข้า Pagination เพื่อให้ Swiper ใช้งาน
</script>
<template>
  <main>
    <div class="flex justify-between max-w-4xl m-auto mt-6">
      <div class="container-one">
        <UButton
          class="mr-4 flex bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
        >
          <img src="~/assets/menu/image 257.png" alt="หน้าหลัก" srcset="" />
          <p class="text-green-500 mt-2">xxx</p>
        </UButton>
        <UButton
          class="mr-4 flex bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
        >
          <img
            class=""
            src="~/assets/menu/image 259.png"
            alt="ซื้อรหัสเกม"
            srcset=""
          />
          <p class="text-green-500 mt-2">xxx</p>
        </UButton>
        <UButton
          class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
        >
          <img src="~/assets/menu/image 255.png" alt="" srcset="" />
          <p class="text-green-500 mt-2">xxx</p>
        </UButton>
      </div>

      <div class="container-two">
        <UButton
          class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
        >
          <img src="~/assets/menu/Frame 4953.png" alt="" srcset="" />
          <p class="text-green-500 mt-2">xxx</p>
        </UButton>
        <UButton
          class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
        >
          <img
            class=""
            src="~/assets/menu/image 251.png"
            alt="โปรโมชั่น"
            srcset=""
          />
          <p class="text-green-500 mt-2">xxx</p>
        </UButton>
        <UButton
          class="bg-white shadow-md w-32 h-32 rounded-lg flex-col items-center justify-center"
        >
          <img src="~/assets/menu/image 258.png" alt="วิธีสั่งซื้อ" srcset="" />
          <p class="text-green-500 mt-2">xxx</p>
        </UButton>
      </div>
    </div>

    <section class="h-80 mt-16">
      <div class="flex justify-between max-w-4xl h-10 m-auto">
        <p class="flex items-center">สถานที่ท่องเที่ยว</p>
        <div class="flex">
          <NuxtLink to="/_lang/travel" class="flex justify-center">
            <UButton class="justify-center rounded-full w-32"
              >ดูทั้งหมด</UButton
            >
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-between max-w-4xl m-auto mt-6">
        <Swiper
          :slidesPerView="5"
          :spaceBetween="20"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :mousewheel="true"
          :keyboard="true"
          class="mySwiper"
        >
          <SwiperSlide
            v-for="item in items"
            :key="item"
            class="flex-col items-center flex justify-center"
          >
            <div class="relative flex-col items-center flex justify-center">
              <img
                :src="item.coverimage"
                alt=""
                srcset=""
                class="rounded-lg w-36 h-44"
              />

              <div
                class="rounded-lg flex-col items-center flex justify-center w-full h-full hover:opacity-100 opacity-0 absolute bg-hover"
              >
                <UButton
                  icon="i-simple-line-icons-control-play"
                  size="2xs"
                  class="text-sm w-18 h-18 text-white m-auto btn btn-blue"
                >
                  เข้าเกม
                </UButton>
              </div>
            </div>
            <p class="mt-1 text-sm">{{ item.name }}</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </main>
</template>
<style scoped>
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
.container-one {
  display: flex;
}
.container-two {
  display: flex;
}
.botton-one {
  width: 20%;
  height: 30%;
}
</style>
