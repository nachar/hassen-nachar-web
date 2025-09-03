<template>
  <v-container class="h-100">
    <div class="chat">
      <div class="chat__messages">
        <div class="chat__messages__content">
          <div
            v-for="(msg, index) in messages"
            :key="index"
            :ref="msg.type === 'question' ? setQuestionRef : null"
            class="d-flex mb-4"
            :class="msg.type === 'question' ? 'justify-end' : 'justify-start'"
          >
            <div
              :class="msg.type === 'question' ? 'message--question' : 'message--answer'"
              class="message rounded pa-3"
            >
              <div v-html="msg.text"></div>
            </div>
          </div>
          <v-skeleton-loader v-if="fetchAskLoading" type="paragraph" />
        </div>
      </div>
      <div class="chat__input pa-4 d-flex align-center">
        <v-text-field
          v-model="question"
          class="mr-4"
          label="Ask me anything about Hassen..."
          variant="solo"
          hide-details
          clearable
          @keyup.enter="sendQuestion"
        />
        <v-btn color="primary" :disabled="!question" @click="sendQuestion">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue';

import { useAsk } from '@/composables/api/useAsk.js';

const { fetchAsk, fetchAskLoading, fetchAskError, fetchAskSuccess, fetchAskReset, fetchAskData } =
  useAsk();

const messages = ref([
  {
    type: 'answer',
    text: '<h2>Welcome to Hassen Nachar’s AI Assistant!</h2><p>I am an <b>AI specialized</b> in answering questions about <b>Hassen Nachar’s professional CV</b>.</p><p>Ask me about his experience, skills, projects, or career background, and I’ll provide clear and structured answers.</p>',
  },
]);

const question = ref('');
const questionRefs = ref([]);

const setQuestionRef = (el) => {
  if (el) questionRefs.value.push(el);
};

const scrollToLastQuestion = () => {
  nextTick(() => {
    const lastQuestion = questionRefs.value.at(-1); // último elemento
    if (lastQuestion) {
      lastQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};

const sendQuestion = () => {
  messages.value.push({ type: 'question', text: question.value.trim() });
  fetchAsk({ params: { question: question.value.trim() } });
  question.value = '';
  scrollToLastQuestion();
};

watch(fetchAskSuccess, (newFetchAskSuccess) => {
  if (newFetchAskSuccess) {
    messages.value.push({ type: 'answer', text: fetchAskData?.value?.answer });
    fetchAskReset();
  }
});

watch(fetchAskError, (newFetchAskError) => {
  if (newFetchAskError) {
    messages.value.push({ type: 'answer', text: 'Something went wrong. Please try again.' });
    fetchAskReset();
  }
});
</script>

<style scoped lang="scss">
@use '@/styles/colors' as colors;

$input-height: 100px;

@media (min-width: 1280px) {
  .v-container {
    max-width: 800px;
  }
}

.chat {
  height: 100%;
  &__messages {
    height: calc(100% - $input-height);
    border-bottom: 1px colors.$gray-light solid;
    overflow-y: scroll;
    &__content {
      padding: 16px 16px 100vh 16px;
    }
  }
  &__input {
    height: $input-height;
  }
}

.message {
  &--question {
    background-color: colors.$primary;
    color: colors.$surface;
    max-width: 60%;
  }
  &--answer {
    background-color: colors.$surface;
  }
}
</style>

<!-- To v-html - No scoped -->
<style lang="scss">
@use '@/styles/colors' as colors;

.message {
  ul,
  ol {
    margin: 8px 0;
    padding-left: 20px;
  }
  li {
    margin-bottom: 4px;
  }
  table,
  th,
  td {
    border-collapse: collapse;
    border: 1px colors.$gray-light solid;
  }
  th,
  td {
    padding: 4px;
  }
}
</style>
