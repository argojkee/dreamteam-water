import axios from 'axios';

export const deleteDrink = async drinkId => {
  const { data } = await axios.delete(`/water/drinks/${drinkId}`);
  return data;
};
