import axios from 'axios';

export const getCurrentMonthAPI = async date => {
  const { data } = await axios.post('water/month', date);

  return data;
};
