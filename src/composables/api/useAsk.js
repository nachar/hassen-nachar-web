import ApiManager from '@/apiManager/apiManager';
import { useRequest } from '@/composables/api/useRequest.js';

const { getAsk } = ApiManager.ask;

export function useAsk() {
  const fetchAsk = useRequest(getAsk, 'fetchAsk');

  return {
    ...fetchAsk,
  };
}
