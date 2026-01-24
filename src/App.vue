<script setup>
import { reactive, ref } from 'vue';

import AboutSection from '@/components/AboutSection.vue';
import AIChatbotPromotion from '@/components/AIChatbotPromotion.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppsSection from '@/components/AppsSection.vue';
import ChatSection from '@/components/ChatSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import JobsSection from '@/components/JobsSection.vue';
import LinksSection from '@/components/LinksSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';

const askChatbot = ref(false);

const changeAskChatbot = () => {
  askChatbot.value = !askChatbot.value;
};

const highlightSections = reactive({
  projects: false,
  jobs: false,
  about: false,
  links: false,
});

const highlightSection = (section) => {
  highlightSections[section] = true;

  setTimeout(() => {
    highlightSections[section] = false;
  }, 2500);
};
</script>

<template>
  <v-app>
    <v-layout>
      <AppHeader />

      <v-main>
        <v-container class="py-12">
          <HeroSection />
          <AIChatbotPromotion @ask-chatbot="changeAskChatbot" />
          <AboutSection :highlight="highlightSections.about" />
          <JobsSection :highlight="highlightSections.jobs" />
          <ProjectsSection :highlight="highlightSections.projects" />
          <AppsSection />
          <LinksSection :highlight="highlightSections.links" />
        </v-container>
      </v-main>
      <ChatSection :ask-chatbot="askChatbot" @highlight-section="highlightSection" />
    </v-layout>
  </v-app>
</template>

<style scoped lang="scss"></style>
