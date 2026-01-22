<script setup>
import AboutSection from '@/components/AboutSection.vue';
import AIChatbotPromotion from '@/components/AIChatbotPromotion.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppsSection from '@/components/AppsSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import JobsSection from '@/components/JobsSection.vue';
import LinksSection from '@/components/LinksSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
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
          <JobsSection />
          <ProjectsSection />
          <AppsSection />
          <LinksSection />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped lang="scss"></style>
