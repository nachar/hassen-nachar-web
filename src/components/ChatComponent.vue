<template>
  <v-container class="h-100">
    <div class="chat">
      <div class="chat__messages pa-4">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="d-flex"
          :class="msg.type === 'question' ? 'mb-4 justify-end' : 'mb-4 justify-start'"
        >
          <div
            :class="
              msg.type === 'question' ? 'message message--question' : 'message message--answer'
            "
            class="rounded pa-3"
          >
            <div v-html="msg.text"></div>
          </div>
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
          @keyup.enter="sendMessage"
        />
        <v-btn color="primary" :disabled="!question" @click="sendMessage">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>

  <!--  <v-container class="fill-height d-flex flex-column">-->
  <!--    <div class="flex-grow-1 overflow-y-auto pa-4 w-100">-->
  <!--      <div-->
  <!--        v-for="(msg, index) in messages"-->
  <!--        :key="index"-->
  <!--        class="d-flex"-->
  <!--        :class="msg.type === 'question' ? 'mb-4 justify-end' : 'mb-4 justify-start'"-->
  <!--      >-->
  <!--        <div-->
  <!--          :class="msg.type === 'question' ? 'message message&#45;&#45;question' : 'message message&#45;&#45;answer'"-->
  <!--          class="rounded pa-3"-->
  <!--        >-->
  <!--          <div v-html="msg.text"></div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </v-container>-->

  <!--  <v-footer app fixed elevation="4" class="pa-3">-->
  <!--    <v-container>-->
  <!--      <div class="d-flex align-center">-->
  <!--        <v-text-field-->
  <!--          v-model="question"-->
  <!--          class="mr-4"-->
  <!--          label="Ask me anything..."-->
  <!--          variant="solo"-->
  <!--          hide-details-->
  <!--          clearable-->
  <!--          @keyup.enter="sendMessage"-->
  <!--        />-->
  <!--        <v-btn color="primary" @click="sendMessage">-->
  <!--          <v-icon>mdi-send</v-icon>-->
  <!--        </v-btn>-->
  <!--      </div>-->
  <!--    </v-container>-->
  <!--  </v-footer>-->
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([
  {
    type: 'answer',
    text: '<h2>Welcome to Hassen Nachar’s AI Assistant!</h2><p>I am an <b>AI specialized</b> in answering questions about <b>Hassen Nachar’s professional CV</b>.</p><p>Ask me about his experience, skills, projects, or career background, and I’ll provide clear and structured answers.</p>',
  },
  {
    type: 'question',
    text: '<p>Hi! 👋 Who is Hassen Nachar?</p>',
  },
  {
    type: 'answer',
    text: `
      <p>Hassen is a <b>Frontend Engineer</b> with more than
      <b>10 years of experience</b> building modern web applications
      with frameworks like <b>React, Vue, and Angular</b>.</p>
      <p>He’s also worked in <i>mobile development</i> and
      is part of <b>GFT, collaborating with BBVA</b>.</p>
    `,
  },
  {
    type: 'question',
    text: '<p>💡 What kind of projects has he worked on?  What kind of projects has he worked on?   What kind of projects has he worked on?</p>',
  },

  {
    type: 'answer',
    text: `
      <p>Great question! 🚀</p>
      <p>He has contributed to <b>web platforms</b> in the insurance sector,
      built <b>hybrid mobile apps</b> for iOS and Android,
      and presented in <b>Sprint ceremonies</b> as part of agile teams.</p>
    `,
  },
  {
    type: 'question',
    text: '<p>🔥 Tell me one of his strongest skills!</p>',
  },
  {
    type: 'answer',
    text: `
      <p>Definitely his mastery of <b>Frontend development</b>
      with <b>TypeScript and modern frameworks</b>.</p>
      <p>But also his <i>adaptability</i> — he quickly transitioned
      from web development to mobile apps and became a key team member.</p>
    `,
  },
]);

const question = ref('');

function sendMessage() {
  if (question.value.trim() !== '') {
    messages.value.push({ type: 'question', text: question.value });
    question.value = '';
    setTimeout(() => {
      messages.value.push({ type: 'answer', text: 'Mensaje recibido ✅' });
    }, 1000);
  }
}
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
