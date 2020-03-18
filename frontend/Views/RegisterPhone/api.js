/**
 * user profile apis
 */

import axios from 'axios';

export const fetchAuthViaPhone = (number) => {
  return axios.get(`/api/user/authViaPhone?number=${number}`);
};
