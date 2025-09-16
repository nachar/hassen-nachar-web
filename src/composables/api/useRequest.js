import { ref } from 'vue';

export function useRequest(fn, prefix = '') {
  const loading = ref(false);
  const error = ref(false);
  const success = ref(false);
  const data = ref(null);

  const execute = async (...args) => {
    loading.value = true;
    error.value = null;
    success.value = false;

    try {
      const result = await fn(...args);
      data.value = result.data;
      success.value = true;
      return result;
    } catch (err) {
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  const reset = () => {
    loading.value = false;
    error.value = null;
    success.value = false;
    data.value = null;
  };

  return {
    [`${prefix}`]: execute,
    [`${prefix}Loading`]: loading,
    [`${prefix}Error`]: error,
    [`${prefix}Success`]: success,
    [`${prefix}Reset`]: reset,
    [`${prefix}Data`]: data,
  };
}
