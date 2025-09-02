<template>
  <v-main>
    <v-app-bar color="primary">
      <v-app-bar-title>Hassen Nachar <span>Portfolio</span></v-app-bar-title>
    </v-app-bar>

    <v-container class="fill-height d-flex flex-column">
      <div class="flex-grow-1 overflow-y-auto pa-4 w-100">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="d-flex"
          :class="msg.type === 'question' ? 'justify-end' : 'justify-start'"
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
    </v-container>

    <v-footer app fixed elevation="4" class="pa-3">
      <v-container>
        <div class="d-flex align-center">
          <v-text-field
            v-model="newMessage"
            class="mr-4"
            label="Escribe un mensaje..."
            variant="outlined"
            density="comfortable"
            hide-details
            clearable
            @keyup.enter="sendMessage"
          />
          <v-btn color="primary" @click="sendMessage">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-footer>
  </v-main>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([
  {
    type: 'answer',
    text: '<h2>Welcome to Hassen Nachar’s AI Assistant!</h2><p>I am an <b>AI specialized</b> in answering questions about <b>Hassen Nachar’s professional CV</b>.</p><p>Ask me about his experience, skills, projects, or career background, and I’ll provide clear and structured answers.</p>',
  },
  { type: 'question', text: '<p>Hola! ¿Cómo estás?</p>' },
  { type: 'answer', text: '<p>Bien, gracias. ¿Listo para el proyecto?</p>' },
  { type: 'question', text: '<p>Hola! ¿Cómo estás?</p>' },
  { type: 'answer', text: '<p>Bien, gracias. ¿Listo para el proyecto?</p>' },
  { type: 'question', text: '<p>Hola! ¿Cómo estás?</p>' },
  { type: 'answer', text: '<p>Bien, gracias. ¿Listo para el proyecto?</p>' },
  { type: 'question', text: '<p>Hola! ¿Cómo estás?</p>' },
  { type: 'answer', text: '<p>Bien, gracias. ¿Listo para el proyecto?</p>' },
]);

const newMessage = ref('');

function sendMessage() {
  if (newMessage.value.trim() !== '') {
    messages.value.push({ question: newMessage.value });
    newMessage.value = '';
    setTimeout(() => {
      messages.value.push({ answer: 'Mensaje recibido ✅' });
    }, 1000);
  }
}
</script>

<style scoped lang="scss">
.fill-height {
  height: 100vh;
}

.message {
  &--question {
    background-color: #1976d2;
    color: white;
  }
  &--answer {
    background-color: #f8f8f8;
  }
}
</style>
