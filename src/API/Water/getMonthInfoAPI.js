import axios from 'axios';

export const getMonthInfoAPI = async date => {
  const { data } = await axios.post('water/month', date);

  return data;
};
