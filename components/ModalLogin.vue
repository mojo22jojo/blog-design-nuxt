<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
  email: undefined,
  password: undefined,
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
        <div class="p-6">
          <h2 class="text-lg font-bold mb-3">เข้าสู่ระบบ</h2>
          <UForm
            :validate="validate"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormGroup label="ชื่อผู้ใช้ หรือ เบอร์โทรศัพย์" name="email">
              <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="รหัสผ่าน" name="password">
              <UInput v-model="state.password" type="password" />
            </UFormGroup>
            <UFormGroup>
              <UButton class="text-xs" color="purple" variant="link"
                >ลืมรหัสผ่าน</UButton
              >
              <p class="flex justify-center items-center w-full">
                คุณยังไม่มีบัญชีผู้ใช้ ?
                <UButton class="" color="yellow" variant="link"
                  >สมัครสมาชิก</UButton
                >
              </p>
              <p class="flex justify-center items-center w-full text-xs">
                พบปัญหา
                <UButton
                  class="flex justify-start text-xs"
                  color="purple"
                  variant="link"
                  >ติดต่อ</UButton
                >
              </p>
            </UFormGroup>
            <UButton class="flex justify-center w-full" type="submit">
              เข้าสู่ระบบ
            </UButton>
          </UForm>
        </div>
      </div>
    </div>
  </div>
</template>
