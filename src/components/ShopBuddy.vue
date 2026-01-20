<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <v-row align="center" justify="center">
    <!-- Text section -->
    <v-col cols="12" md="6">
      <v-card elevation="0">
        <v-card-title class="text-h4 font-weight-bold"> Shop Buddy </v-card-title>

        <v-card-text class="text-body-1 mt-2">
          A simple, fast and ad-free iPhone app to organize your shopping list. Keep everything in
          one place and make grocery shopping easier.
        </v-card-text>

        <v-card-actions class="mt-4">
          <v-btn
            color="shopBuddyPurple"
            size="large"
            href="https://apps.apple.com/app/id6757487162"
            target="_blank"
            rel="noopener"
          >
            Download on the App Store
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <!-- Image section -->
    <v-col cols="12" md="6" class="text-center">
      <a href="https://apps.apple.com/app/id6757487162" target="_blank" rel="noopener">
        <v-img
          src="/shopBuddyLogo.png"
          alt="Shop Buddy app preview"
          max-width="200"
          aspect-ratio="9/19"
          class="mx-auto rounded-lg"
          cover
        />
      </a>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
