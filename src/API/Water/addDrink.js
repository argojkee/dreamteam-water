import axios from 'axios';

export const addDrink = async drink => {
  const { data } = await axios.post('/water/drinks', drink);
  return data;
};
