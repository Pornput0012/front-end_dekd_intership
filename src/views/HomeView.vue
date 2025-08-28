<script setup>
import MainContainer from "@/components/MainContainer.vue";
import NovelList from "@/components/NovelList.vue";
import { useNovelStore } from "@/stores/novel";
import { Icon } from "@iconify/vue";

const { getAllNovel } = useNovelStore();
</script>

<template>
  <MainContainer>
    <template v-slot:header>
      <div class="flex items-center">
        <h1 class="text-2xl md:text-3xl font-medium mr-2">นิยายติดท็อป</h1>
        <Icon
          icon="material-symbols:crown"
          class="w-6 h-6 md:h-7 md:w-7"
          style="color: #ffc900"
        />
      </div>
      <p class="font-light text-sm md:font-normal md:text-base md:ml-4">
        จัดอันดับประจำวันที่ 25 ส.ค. 68
      </p>
    </template>
    <template v-slot>
      <hr class="my-4 max-w-[1080px] mx-auto text-gray-400 opacity-40" />
      <NovelList :novels="getAllNovel()" />
    </template>
  </MainContainer>
</template>

<style scoped></style>
