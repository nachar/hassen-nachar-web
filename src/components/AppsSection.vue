<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <h2 id="apps" class="text-h5 font-weight-bold py-6">
    {{ t('apps.title') }}
  </h2>
  <v-row class="mb-8">
    <v-col cols="12">
      <v-card class="pa-4">
        <div class="d-lg-flex flex-no-wrap justify-space-between text-center text-lg-start">
          <div>
            <v-card-title class="text-h5">{{ t('apps.shop_buddy.title') }}</v-card-title>

            <v-card-subtitle class="text-wrap">{{
              t('apps.shop_buddy.description')
            }}</v-card-subtitle>

            <v-card-actions class="mt-4 d-flex d-lg-block justify-center">
              <v-btn
                color="primary"
                size="large"
                href="https://apps.apple.com/app/id6757487162"
                target="_blank"
                rel="noopener"
                >{{ t('apps.shop_buddy.button') }}</v-btn
              >
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" rounded="0" size="125">
            <a href="https://apps.apple.com/app/id6757487162" target="_blank" rel="noopener">
              <v-img
                src="https://nachar.github.io/hassen-nachar-web/shopBuddyLogo.png"
                alt="Shop Buddy app preview"
                max-width="200"
                width="125"
                aspect-ratio="9/19"
                class="mx-auto rounded-lg"
                cover
              />
            </a>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
