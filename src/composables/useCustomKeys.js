import { ref } from 'vue';

const selectedKey = ref(undefined);

export function useCustomKeys() {
  const setCustomKey = (key) => {
    selectedKey.value = key;
  };

  return {
    selectedKey,
    setCustomKey,
  };
}
