export const formatResponse = (response) => {
  const keys = ['***projects***', '***jobs***', '***personal_information***', '***links***'];
  let customKey = '';
  let text = response;

  for (const key of keys) {
    if (response.includes(key)) {
      text = response.replace(key, '');
      customKey = key;
      break;
    }
  }

  return { text, customKey };
};
