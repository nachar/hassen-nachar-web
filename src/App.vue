<script setup>
import AboutSection from '@/components/AboutSection.vue';
import AIChatbotPromotion from '@/components/AIChatbotPromotion.vue';
import AppHeader from '@/components/AppHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import LinksSection from '@/components/LinksSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ShopBuddy from '@/components/ShopBuddy.vue';
</script>

<template>
  <v-app>
    <v-layout>
      <AppHeader />

      <v-main>
        <v-container class="py-12">
          <HeroSection />
          <AIChatbotPromotion />
          <AboutSection />
          <ProjectsSection />
          <ShopBuddy />
          <LinksSection />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped lang="scss"></style>
