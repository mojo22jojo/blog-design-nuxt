<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import ModalRegister from "~/components/ModalRegister.vue";
import ModalLogin from "~/components/ModalLogin.vue";

// components modal Register
const showRegister = ref(false);
const openRegister = () => {
  console.log("openConfirm is called");
  showRegister.value = true;
};
const closeRegister = () => {
  console.log("closeConfirm is called");
  showRegister.value = false;
};
// components modal Login
const showLogin = ref(false);
const openLogin = () => {
  console.log("openConfirm is called");
  showLogin.value = true;
};
const closeLogin = () => {
  console.log("closeConfirm is called");
  showLogin.value = false;
};
import "swiper/css";
const photos = [
  "theam-valorant.png",
  "theme-rov.png",
  "theme-ragnarok.png",
  "theme-god-of-war.png",
  "theme-hon.png",
];
</script>
<template>
  <div>
    <NavBar />
    <nav class="bg-black h-8">
      <div class="text-white flex justify-between max-w-6xl m-auto p-1">
        <div class="flex">
          <img
            src="/assets/icon/entypo-social_facebook.png"
            alt="contact factbook"
            class="w-5 h-5 mt-0.5"
          />
          <span>เวลาทำการ 10:00 - 22:00</span>
        </div>
        <div class="flex">
          <img
            src="/assets/icon/line 1.png"
            alt="contact line"
            class="w-4 h-4 mt-1"
          />
          <span class="mr-4 item-center">@Term711</span>
          <img
            src="/assets/icon/el_phone-alt.png"
            alt="contact phone"
            class="w-4 h-4 mt-1"
          />
          <span class="">0810310539</span>
        </div>
      </div>
      <div
        class="backdrop-blur absolute top-11 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 mt-5 m-auto w-full"
      >
        <nav class="h-16 flex justify-center max-w-6xl m-auto">
          <div
            class="text-white flex justify-between m-auto p-1 flex justify-center items-center w-full"
          >
            <div class="flex">
              <img
                src="~/public/logo text.png"
                alt="contact factbook"
                class=""
              />
            </div>
            <div class="flex justify-between items-center w-96">
              <div class="flex justify-center items-center w-48 border-r-4">
                <img src="/public/user-plus.png" alt="" srcset="" class="" />
                <ModalRegister
                  v-if="showRegister"
                  @close="closeRegister"
                ></ModalRegister>
                <UButton
                  class="flex items-center text-white"
                  color="none"
                  variant="ghost"
                  @click="openRegister"
                  >สมัครสมาชิก</UButton
                >
              </div>
              <div class="flex justify-center items-center w-48">
                <img src="/public/Vector.png" alt="" srcset="" class="" />
                <ModalLogin v-if="showLogin" @close="closeLogin"></ModalLogin>
                <UButton
                  class="flex items-center text-white"
                  color="none"
                  variant="ghost"
                  @click="openLogin"
                  >เข้าสู่ระบบ</UButton
                >
              </div>
              <img
                src="/public/emojione_flag-for-thailand.png"
                alt=""
                class=""
              />
            </div>
          </div>
        </nav>
      </div>
    </nav>
    <div>
      <main class="flex justify-center">
        <Swiper>
          <SwiperSlide v-for="photo in photos" :key="photo.id" class="relative">
            <img :src="`${photo}`" alt="" class="max-w-auto m-auto w-full" />
          </SwiperSlide>
        </Swiper>
      </main>
      <!-- <Banner /> -->
    </div>
    <slot />
    <!-- เอา footer ต่อตรงนี้  -->
    <footer />
    <div class="bg-black mt-44 h-96 py-14">
      <div class="flex justify-between max-w-4xl h-72 m-auto">
        <div class="text-white w-96">
          <div class="h-14 flex items-center">
            <img src="~/public/logo text.png" alt="logo text" />
          </div>

          <p class="mt-4 text-base">
            ร้านเติมเซเว่น เป็นเพียงตัวแทนจำหน่ายเท่านั้น
            ไม่มีส่วนเกี่ยวข้องกับองค์กรหรือบุคคลใดๆที่แอบอ้างใช้ชื่อบัญชีธนาคารร้านเติมเซเว่นเครดิตในเว็บไซต์ใช้สำหรับซื้อสินค้าภายในเว็บไซต์เติมเซเว่นเท่านั้นโปรดระวังมิจฉาชีพแอบอ้างบัญชีเราเพื่อหลอกให้ผู้อื่นจ่ายค่าสินค้าแทน
          </p>

          <p class="mt-9 text-sm">Follow Us On Social</p>
          <span class="flex justify-between flex items-center w-20">
            <img src="/assets/social/devicon_facebook.png" />
            <img
              src="/assets/social/logos_youtube-icon.png"
              class="h-4 flex justify-center"
            />
            <img src="/assets/social/skill-icons_instagram.png" />
          </span>
        </div>
        <div class="text-white w-24 h-14">
          <p class="h-14 flex items-center">Help?</p>
          <p class="h-6">วิธีเติมเงิน</p>
          <p class="h-6 mt-6">ประวัติการซื้อ</p>
          <p class="h-6 mt-6">FAQ</p>
          <p class="h-6 mt-6">เกี่ยวกับเรา</p>
        </div>
        <div class="text-white w-64 h-14">
          <p class="h-14 flex items-center">Contact</p>
          <div class="flex h-6 flex items-center">
            <img
              src="/assets/icon/el_phone-alt.png"
              alt="contact factbook"
              class="w-4 h-4"
            />
            <p class="ml-1">0683951232</p>
          </div>
          <div class="flex mt-6 h-6 flex items-center">
            <img
              src="/assets/icon/entypo-social_facebook.png"
              alt="contact factbook"
              class="w-4 h-4"
            />
            <p class="ml-1">เวลาทำการ 10:00 - 22:00</p>
          </div>
          <p class="h-6 mt-6">ให้บริการตั้งแต่เวลา 10.00 - 22.00 น.</p>
          <div
            class="bg-white border-solid rounded w-44 h-8 mt-6 text-black flex items-center"
          >
            <img
              src="/assets/icon/image 217.png"
              alt=""
              srcset=""
              class="ml-1"
            />
            บันทึกลงใน facebook
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* .hand-cursor {
  cursor: pointer;
  cursor: url("path/to/hand-cursor.png"), auto;
} */
</style>
