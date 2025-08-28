<script setup></script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <router-link
        :to="{ name: 'home' }"
        class="font-semibold text-xl ml-4 text-orange-600"
        >Dek-Dok</router-link
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal items-center px-1">
        <li>
          <router-link :to="{ name: 'bookmark' }"
            >รายการคั่นหนังสือ</router-link
          >
        </li>
        <li>
          <details>
            <summary>
              <div class="avatar">
                <div class="rounded-full max-w-10">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                  />
                </div>
              </div>
            </summary>
            <ul class="absolute right-0 bg-base-100 rounded-t-none p-2 z-10">
              <li><a class="text-nowrap">ข้อมูลส่วนตัว</a></li>
              <hr class="my-1 w-5/6 mx-auto" />
              <li><a class="text-nowrap">ออกจากระบบ</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
