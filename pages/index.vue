<script setup>
import SpecialGard from "~/components/homelogin/SpecialGard.vue";
import Banner from "~/components/Banner.vue";
import Ranking from "~/components/homelogin/Ranking.vue";
import TermGameOnline from "~/components/homelogin/TermGameOnline.vue";
import BuyGameGard from "~/components/homelogin/BuyGameGard.vue";
import BuyPasswordGame from "~/components/homelogin/BuyPasswordGame.vue";
import About from "~/components/homelogin/About.vue";
import Promotion from "~/components/homelogin/Promotion.vue";
</script>
<template>
  <div>
    <Banner />
  </div>
  <main>
    <div class="flex justify-between max-w-4xl m-auto mt-6">
      <UButton
        class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex-col items-center justify-center"
      >
        <img src="~/assets/menu/image 257.png" alt="หน้าหลัก" srcset="" />
        <p class="text-green-500 mt-2">หน้าหลัก</p>
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
        <p class="text-green-500 mt-2">ซื้อรหัสเกม</p>
      </UButton>
      <UButton
        class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
      >
        <img src="~/assets/menu/image 255.png" alt="" srcset="" />
        <p class="text-green-500 mt-2">เติมเกมส์</p>
      </UButton>
      <UButton
        class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
      >
        <img src="~/assets/menu/Frame 4953.png" alt="" srcset="" />
        <p class="text-green-500 mt-2">ซื้อบัตรเติมเงิน</p>
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
        <p class="text-green-500 mt-2">โปรโมชั่น</p>
      </UButton>
      <UButton
        class="bg-white shadow-md w-32 h-32 rounded-lg flex-col items-center justify-center"
      >
        <img src="~/assets/menu/image 258.png" alt="วิธีสั่งซื้อ" srcset="" />
        <p class="text-green-500 mt-2">วิธีสั่งซื้อ</p>
      </UButton>
    </div>
    <template>
      <div>
        <SpecialGard />
      </div>
    </template>
    <template>
      <div>
        <Ranking />
      </div>
    </template>
    <template>
      <div>
        <TermGameOnline />
      </div>
    </template>
    <template>
      <div>
        <BuyGameGard />
      </div>
    </template>
    <template>
      <div>
        <BuyPasswordGame />
      </div>
    </template>
    <template>
      <div>
        <About />
      </div>
    </template>
    <template>
      <div>
        <Promotion />
      </div>
    </template>
  </main>
</template>
