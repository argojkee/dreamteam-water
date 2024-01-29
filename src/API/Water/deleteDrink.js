import axios from 'axios';

export const deleteDrink = async drink => {
  const { data } = await axios.delete('/water/drinks', drink);
  return data;
};
