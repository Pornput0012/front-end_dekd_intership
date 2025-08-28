<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import image1 from "@/assets/mock_images/1.png";
import image2 from "@/assets/mock_images/2.png";
import image3 from "@/assets/mock_images/3.png";

const images = [image1, image2, image3];

const desktopSections = [0, 1, 2, 3];

const mobileSections = [
  { index: 0, imageIndex: 2 },
  { index: 1, imageIndex: 0 },
  { index: 2, imageIndex: 1 },
  { index: 3, imageIndex: 2 },
  { index: 4, imageIndex: 0 },
];

const currentIndex = ref(0);
const scrollInterval = ref(null);
const isTransition = ref(true);

const mobileCurrentIndex = ref(0);
const mobileScrollInterval = ref(null);
const mobileIsTransition = ref(true);

const nextSection = () => {
  isTransition.value = true;
  currentIndex.value += 1;

  if (currentIndex.value > 2) {
    setTimeout(() => {
      isTransition.value = false;
      currentIndex.value = 0;
    }, 1000);
  }
};

const mobileNextSection = () => {
  mobileIsTransition.value = true;
  mobileCurrentIndex.value += 1;

  if (mobileCurrentIndex.value > 3) {
    setTimeout(() => {
      mobileIsTransition.value = false;
      mobileCurrentIndex.value = 1;
    }, 500);
  }
};

const autoScroll = () => {
  scrollInterval.value = setInterval(() => {
    nextSection();
  }, 3000);
};

const mobileAutoScroll = () => {
  mobileScrollInterval.value = setInterval(() => {
    mobileNextSection();
  }, 3000);
};

onMounted(() => {
  autoScroll();
  mobileAutoScroll();
  mobileCurrentIndex.value = 1;
});

onUnmounted(() => {
  if (scrollInterval.value) {
    clearInterval(scrollInterval.value);
  }
  if (mobileScrollInterval.value) {
    clearInterval(mobileScrollInterval.value);
  }
});
</script>

<template>
  <div
    class="hidden md:block relative w-full max-h-[320px] md:max-h-[160px] lg:max-h-[230px] xl:max-h-[320px] overflow-hidden"
  >
    <div
      class="flex"
      :class="isTransition && 'transition-transform duration-500 ease-in-out'"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="sectionIndex in desktopSections"
        :key="`desktop-section-${sectionIndex}`"
        class="flex gap-2 w-full h-full shrink-0"
      >
        <div
          v-for="(src, i) in images"
          :key="`section${sectionIndex}-${i}`"
          :class="(i - 1) % 3 == 0 ? 'w-1/2' : 'w-1/3'"
        >
          <img
            :src="src"
            class="w-full h-full object-contain object-top"
            alt=""
          />
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <div
        v-for="i in 3"
        :key="`desktop-dot-${i-1}`"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="currentIndex === i-1 ? 'bg-pink-400' : 'bg-gray-400/50'"
      ></div>
    </div>
  </div>

  <div class="block md:hidden relative w-full max-h-[250px] overflow-hidden">
    <div
      class="flex"
      :class="
        mobileIsTransition && 'transition-transform duration-500 ease-in-out'
      "
      :style="{ transform: `translateX(-${mobileCurrentIndex * 100}%)` }"
    >
      <div
        v-for="section in mobileSections"
        :key="`mobile-section-${section.index}`"
        class="flex w-full shrink-0 justify-center items-center p-4"
      >
        <div class="w-full">
          <img
            :src="images[section.imageIndex]"
            class="w-full h-[250px] object-contain rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <div
        v-for="i in 3"
        :key="`mobile-dot-${i-1}`"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="(mobileCurrentIndex === i || (mobileCurrentIndex === 4 && i === 1)) ? 'bg-pink-400' : 'bg-gray-400/50'"
      ></div>
    </div>
  </div>
</template>