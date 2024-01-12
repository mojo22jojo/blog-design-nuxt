<template>
  <div>
    <NavBar />
    <nav class="bg-black">
      <div class="text-white flex justify-between max-w-5xl m-auto">
        <div class="flex">
          <img
            src="/assets/icon/entypo-social_facebook.png"
            alt="contact factbook"
            class="w-5 h-5 mt-0.5"
          />
          <span class="">เวลาทำการ 10:00 - 22:00</span>
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
          <span class="">0683951232</span>
        </div>
      </div>
    </nav>
    <div>
      <slot />
    </div>
  </div>
</template>
