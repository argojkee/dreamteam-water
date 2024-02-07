import axios from 'axios';

export const getMonthInfo = async month => {
  const { data } = await axios.post('/water/month', month);
  return data;
};
