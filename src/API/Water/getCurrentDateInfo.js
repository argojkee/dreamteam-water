import axios from 'axios';

export const getCurrentDateInfo = async date => {
  const { data } = await axios.post('/water', date);
  return data;
};
