import { ref } from 'vue';

const selectedKey = ref(undefined);
const selectedMessages = ref(undefined);

export function useCustomKeys() {
  const setCustomKey = (key) => {
    selectedKey.value = key;
  };

  const setMessages = (messages) => {
    selectedMessages.value = messages;
  };

  return {
    selectedKey,
    selectedMessages,
    setCustomKey,
    setMessages,
  };
}
