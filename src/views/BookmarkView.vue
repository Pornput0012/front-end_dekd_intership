<script setup>
import MainContainer from "@/components/MainContainer.vue";
import NovelList from "@/components/NovelList.vue";
import { useNovelStore } from "@/stores/novel";
import { computed } from "vue";
const { getAllBookmark, deleteAllBookmark } = useNovelStore();
const allBookmark = computed(() => getAllBookmark());

const handleDelete = (selectedIndexes) => {
  deleteAllBookmark(selectedIndexes);
};
</script>

<template>
  <MainContainer>
    <template v-slot:header>
      <div class="flex items-center">
        <h1 class="text-2xl md:text-3xl font-medium mr-2">รายการที่คั่นไว้</h1>
      </div>
    </template>
    <template v-slot>
      <div class="max-w-[1080px] mx-auto">
        <hr class="my-4 w-full text-gray-400 opacity-40" />
      </div>
      <NovelList
        :novels="allBookmark"
        @handle-delete="handleDelete"
        type="bookmark"
      />
    </template>
  </MainContainer>
</template>

<style scoped></style>
