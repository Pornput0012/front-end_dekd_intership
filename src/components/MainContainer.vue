<template>
  <div class="px-4 mt-4 md:mt-8 md:px-20 pb-20">
    <div
      class="max-w-[1080px] mx-auto flex flex-col md:flex-row md:items-center"
    >
      <slot name="header"></slot>
    </div>
    <slot></slot>
  </div>
</template>
