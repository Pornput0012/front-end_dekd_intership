<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";

const props = defineProps({
  novels: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    default: "top_novel",
  },
});

const emit = defineEmits(["handleDelete"]);

const selectedNovels = ref(new Set());

const toggleSelection = (novelIndex) => {
  if (selectedNovels.value.has(novelIndex)) {
    selectedNovels.value.delete(novelIndex);
  } else {
    selectedNovels.value.add(novelIndex);
  }
};

const isSelected = (index) => selectedNovels.value.has(index);

const isEdit = ref(false);
const toggleIsEdit = () => {
  isEdit.value = !isEdit.value;
  if (!isEdit.value) {
    selectedNovels.value.clear();
  }
};

const handleDelete = () => {
  emit("handleDelete", Array.from(selectedNovels.value));
  selectedNovels.value.clear();
  isEdit.value = false;
};
</script>

<template>
  <div class="max-w-[1080px] mx-auto">
    <div class="flex items-center justify-between" v-if="type == 'bookmark'">
      <div class="flex items-center gap-4">
        <p class="text-xs">จำนวนทั้งหมด {{ novels?.length }} รายการ</p>
        <p v-if="selectedNovels.size > 0" class="text-xs text-orange-700">
          เลือกแล้ว {{ selectedNovels.size }} รายการ
        </p>
      </div>
      <div class="flex items-center gap-2">
        <button
          @click="toggleIsEdit"
          class="btn"
          :class="!isEdit ? 'btn-warning' : ''"
        >
          {{ !isEdit ? "แก้ไข" : "ยกเลิก" }}
        </button>
        <button
          :disabled="selectedNovels.size == 0"
          v-if="isEdit"
          class="btn flex items-center gap-1"
          @click="handleDelete"
        >
          <Icon icon="tabler:trash" width="24" height="24" />
          <p v-if="selectedNovels.size != 0">
            {{ selectedNovels.size }}
          </p>
        </button>
      </div>
    </div>
    <div
      class="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4 max-w-[1080px] mx-auto"
    >
      <div v-for="(novel, index) in novels" :key="index" class="novel-item">
        <div class="flex items-center justify-between relative">
          <div
            v-if="type == 'bookmark' && isEdit"
            class="absolute -right-1 md:-left-8 top-1 md:top-3 z-10 cursor-pointer"
            @click="toggleSelection(index)"
          >
            <div
              class="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200"
              :class="
                isSelected(index)
                  ? 'bg-orange-500 border-orange-500 text-white'
                  : 'border-gray-300 hover:border-orange-400'
              "
            >
              <Icon v-if="isSelected(index)" icon="mdi:check" class="w-3 h-3" />
            </div>
          </div>

          <div
            class="flex md:items-start gap-4 w-full"
            :class="type == 'top_novel' ? 'items-center' : 'items-start'"
          >
            <div
              v-if="type == 'top_novel'"
              class="flex flex-col items-center font-bold min-w-8 md:hidden"
            >
              <Icon
                icon="material-symbols:crown"
                class="w-5 h-5 md:h-7 md:w-7"
                :class="
                  index == 0
                    ? 'text-[#ffc900]'
                    : index == 1
                    ? 'text-gray-600'
                    : index == 2
                    ? 'text-[#B87333]'
                    : 'hidden'
                "
              />
              <p class="text-orange-500">{{ index + 1 }}</p>
            </div>
            <img
              :src="novel.image_url"
              class="w-[100px] h-[150px] rounded-2xl md:block object-cover"
              :class="type == 'top_novel' && 'hidden'"
              alt=""
            />
            <div class="flex flex-col flex-1 justify-center">
              <div class="hidden md:flex justify-between items-center">
                <div v-if="type == 'top_novel'" class="flex items-center badge">
                  <Icon
                    icon="material-symbols:crown"
                    class="w-4 h-4"
                    :class="
                      index == 0
                        ? 'text-[#ffc900]'
                        : index == 1
                        ? 'text-gray-600'
                        : index == 2
                        ? 'text-[#B87333]'
                        : 'hidden'
                    "
                  />
                  <p class="text-xs text-orange-500">{{ index + 1 }}</p>
                </div>
              </div>
              <p class="text-xs md:mt-2 text-gray-400">{{ novel.genre }}</p>

              <p
                class="font-semibold md:line-clamp-2 text-lg"
                :class="type == 'top_novel' ? 'line-clamp-1' : 'line-clamp-2'"
              >
                {{ novel.title }}
              </p>
              <div
                class="flex md:flex-col-reverse md:items-start gap-1 items-center text-gray-600"
              >
                <div
                  v-if="type == 'top_novel'"
                  class="flex items-center gap-1 md:absolute md:bottom-0"
                >
                  <Icon icon="mdi:eye" class="w-3 h-3" />
                  <p class="text-xs">144.92k</p>
                </div>

                <span v-if="type == 'top_novel'" class="md:hidden">·</span>

                <p class="text-xs">{{ novel.author }}</p>
              </div>
              <div
                class="absolute bottom-0 opacity-50"
                v-if="type != 'top_novel'"
              >
                <div class="flex items-center text-xs">
                  <Icon
                    icon="material-symbols:list-rounded"
                    width="24"
                    height="24"
                  />
                  <p>ตอนที่ {{ novel.episode_number }}:</p>
                  <p class="ml-1">{{ novel.episode_title }}</p>
                </div>
                <div class="flex items-center text-xs">
                  <Icon
                    icon="material-symbols-light:bookmark"
                    class="w-6 h-6"
                  />
                  <p>คั่นล่าสุด {{ novel.datetime }} น.</p>
                </div>
              </div>
            </div>
            <div v-if="type == 'top_novel'" class="group cursor-pointer">
              <Icon
                icon="material-symbols-light:bookmark-outline"
                class="w-6 h-6"
              />
              <Icon
                icon="material-symbols-light:bookmark"
                class="w-6 h-6 absolute top-0 hidden group-hover:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="novels?.length === 0" class="text-center py-8 text-gray-500">
    <p>ไม่มีนิยายในรายการ</p>
  </div>
</template>

<style scoped></style>
