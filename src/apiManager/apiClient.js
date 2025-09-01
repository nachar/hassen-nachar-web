/* eslint-disable no-useless-catch */
import axios from 'axios';

import { API_URL } from '@/globals/constants.js';

const apiClient = axios.create({ baseURL: API_URL });

export default apiClient;
