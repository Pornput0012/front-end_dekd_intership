<script setup>
import BannerSection from './components/BannerSection.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />
  <BannerSection />
  <router-view></router-view>
</template>

<style scoped></style>
