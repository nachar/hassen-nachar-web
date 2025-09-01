import ApiClient from '@/apiManager/apiClient.js';

const getAsk = ({ params }) => {
  const defaultParams = {
    question: 'hello',
  };
  const queryParams = { ...defaultParams, ...params };
  return ApiClient.get(`/ask`, { params: queryParams });
};

export default {
  getAsk,
};
