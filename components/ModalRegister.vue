<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const countries = [];
const country = ref(countries[0]);

const state = reactive({
  email: undefined,
  password: undefined,
  phonenumber: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email)
    errors.push({
      path: "email",
      message: "โปรดใส่ชื่อผู้ใช้ หรือ เบอร์โทรศัพย์",
    });
  if (!state.password)
    errors.push({ path: "password", message: "โปรดใส่รหัสผ่าน" });
  if (!state.phonenumber)
    errors.push({
      path: "phonenumber",
      message: "โปรดใส่เบอร์โทรศัพย์",
    });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>
<template>
  <div class="absolute inset-0 bg-black bg-opacity-50">
    <div class="flex items-start justify-center min-h-screen mt-24 text-center">
      <div
        class="bg-white text-black rounded-lg text-center shadow-xl p-4 w-96 h-full"
        role="dialog"
        aria-modal="true"
      >
        <div class="w-68 flex items-center justify-end">
          <UButton
            icon="i-heroicons-x-mark-20-solid"
            color="none"
            variant="ghost"
            @click="$emit('close')"
          ></UButton>
        </div>
        <dir class="p-6">
          <h2 class="text-lg font-bold mb-3">ข้อมูลส่วนตัว</h2>
          <UForm
            :validate="validate"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormGroup label="รหัสผู้แนะนำ (ถ้ามี)" name="email">
              <UInput v-model="state.email" type="text" />
            </UFormGroup>
            <UFormGroup label="รู้จักเราจากที่ไหน?">
              <USelect v-model="country" :options="countries" />
            </UFormGroup>
            <UFormGroup label="เบอร์โทรศัพท์" name="phonenumber">
              <UInput v-model="state.phonenumber" type="text" />
            </UFormGroup>
            <UFormGroup label="รหัสผ่าน" name="password">
              <UInput v-model="state.password" type="password" />
            </UFormGroup>
            <UFormGroup label="ยืนยันรหัสผ่าน" name="password">
              <UInput v-model="state.password" type="password" />
            </UFormGroup>
            <UFormGroup>
              <p class="flex justify-center items-center w-full text-xs">
                พบปัญหา
                <UButton
                  class="flex justify-start text-xs"
                  color="purple"
                  variant="link"
                  >ติดต่อฝ่ายบริการลูกค้า</UButton
                >
              </p>
            </UFormGroup>
            <UButton
              class="flex justify-center w-full"
              color="purple"
              type="submit"
            >
              ถัดไป
            </UButton>
          </UForm>
        </dir>
      </div>
    </div>
  </div>
</template>
