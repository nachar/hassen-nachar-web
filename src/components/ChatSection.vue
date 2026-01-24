<!-- TODO: Me faltan las traducciones a otros idiomas -->
<!-- TODO: Highlight section -->
<script setup>
import { nextTick, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useGoTo } from 'vuetify/framework';

import { useAsk } from '@/composables/api/useAsk.js';
import { useCustomKeys } from '@/composables/useCustomKeys.js';
import { showMoreMessages } from '@/globals/showMoreMessages.js';
import { formatResponse } from '@/globals/utils.js';

const emit = defineEmits(['highlightSection']);

const { askChatbot } = defineProps({
  askChatbot: {
    type: Boolean,
    required: true,
  },
});

const { t } = useI18n();

const isChatOpen = ref(false);
const onClickOutside = () => {
  isChatOpen.value = false;
};

const { fetchAsk, fetchAskLoading, fetchAskError, fetchAskSuccess, fetchAskReset, fetchAskData } =
  useAsk();
const { selectedKey, selectedMessages, setCustomKey, setMessages } = useCustomKeys();
const goTo = useGoTo();

const question = ref('');
const messages = ref([{ type: 'answer', text: t('chat.welcome') }]);
const questionRefs = ref([]);
const selectedSection = ref();
const sections = {
  projects: 'projects',
  jobs: 'jobs',
  personal_information: 'about',
  links: 'links',
};

const setQuestionRef = (el) => {
  if (el) questionRefs.value.push(el);
};

const scrollToLastQuestion = () => {
  nextTick(() => {
    const lastQuestion = questionRefs.value.at(-1);
    if (lastQuestion) {
      lastQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};

const sendQuestion = () => {
  if (!question.value.trim() || fetchAskLoading.value) return;

  messages.value.push({ type: 'question', text: question.value.trim() });
  fetchAsk({ params: { question: question.value.trim() } });
  question.value = '';
  setCustomKey('');
  setMessages(undefined);
  scrollToLastQuestion();
};

watch(fetchAskSuccess, (newSuccess) => {
  if (newSuccess) {
    const { text, customKey, language } = formatResponse(fetchAskData?.value?.answer);
    messages.value.push({ type: 'answer', text });
    if (customKey && language) {
      setCustomKey(customKey);
      setMessages(showMoreMessages[language][customKey]);
      selectedSection.value = sections[customKey];
    }
    fetchAskReset();
    scrollToLastQuestion();
  }
});

watch(fetchAskError, (newError) => {
  if (newError) {
    messages.value.push({ type: 'answer', text: t('chat.error') });
    fetchAskReset();
  }
});

watch(
  () => askChatbot,
  () => {
    isChatOpen.value = true;
  }
);
</script>

<template>
  <div class="chat-widget-container">
    <v-fade-transition>
      <v-card
        v-if="isChatOpen"
        v-click-outside="onClickOutside"
        class="chat-window elevation-18 d-flex flex-column"
        width="380"
        height="550"
        rounded="xl"
      >
        <v-toolbar color="primary" flat>
          <v-avatar color="white" size="32" class="ml-3">
            <v-icon color="primary" size="20">mdi-robot</v-icon>
          </v-avatar>
          <v-toolbar-title class="text-subtitle-1 font-weight-bold">
            {{ t('chat.title') }}
          </v-toolbar-title>
          <v-spacer />
          <v-btn icon="mdi-close" variant="text" @click="isChatOpen = false" />
        </v-toolbar>

        <v-card-text class="bg-grey-lighten-4 flex-grow-1 overflow-y-auto pa-4 chat-messages">
          <div
            v-for="(msg, index) in messages"
            :key="index"
            :ref="msg.type === 'question' ? setQuestionRef : null"
            class="d-flex mb-4"
            :class="msg.type === 'question' ? 'justify-end' : 'justify-start'"
          >
            <v-sheet
              :color="msg.type === 'question' ? 'primary' : 'white'"
              :class="
                msg.type === 'question'
                  ? 'text-white rounded-t-xl rounded-bl-xl'
                  : 'rounded-t-xl rounded-br-xl'
              "
              class="pa-3 elevation-1 message-content"
              max-width="85%"
            >
              <div class="text-body-2" v-html="msg.text"></div>

              <template
                v-if="
                  index === messages.length - 1 &&
                  msg.type === 'answer' &&
                  selectedKey &&
                  selectedMessages
                "
              >
                <div class="mt-3 pt-3 border-t">
                  <p class="text-caption font-weight-bold">{{ selectedMessages.main }}</p>
                  <v-btn
                    size="small"
                    block
                    variant="elevated"
                    color="primary"
                    class="mt-2"
                    @click="
                      goTo(`#${selectedSection}`);
                      emit('highlightSection', selectedSection);
                    "
                  >
                    {{ selectedMessages.button }}
                  </v-btn>
                </div>
              </template>
            </v-sheet>
          </div>

          <div v-if="fetchAskLoading" class="d-flex align-center opacity-60">
            <v-progress-circular indeterminate size="16" width="2" class="mr-2" color="primary" />
            <span class="text-caption">{{ t('chat.thinking') }}</span>
          </div>
        </v-card-text>

        <v-divider />

        <div class="pa-3 bg-white">
          <v-text-field
            v-model="question"
            :disabled="fetchAskLoading"
            :placeholder="t('chat.ask_me')"
            variant="outlined"
            density="compact"
            hide-details
            rounded="pill"
            color="primary"
            @keyup.enter="sendQuestion"
          >
            <template #append-inner>
              <v-btn
                icon="mdi-send-variant"
                variant="text"
                color="primary"
                density="compact"
                :disabled="!question || fetchAskLoading"
                @click="sendQuestion"
              />
            </template>
          </v-text-field>
        </div>
      </v-card>
    </v-fade-transition>

    <v-btn
      color="primary"
      size="x-large"
      class="mt-4 elevation-8"
      :icon="isChatOpen ? 'mdi-minus' : 'mdi-chat-question'"
      @click.stop="isChatOpen = !isChatOpen"
    />
  </div>
</template>

<style scoped lang="scss">
.chat-widget-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.chat-window {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  overflow: hidden;
}

.chat-messages {
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 10px;
  }
}

.border-t {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>

<style lang="scss">
.message-content {
  ul,
  ol {
    margin: 8px 0;
    padding-left: 20px;
  }
  li {
    margin-bottom: 4px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 8px 0;
  }
  th,
  td {
    border: 1px solid #e0e0e0;
    padding: 4px;
    font-size: 0.85rem;
  }
}
</style>
