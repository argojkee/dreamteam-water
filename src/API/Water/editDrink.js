import axios from 'axios';

export const editDrink = async (drinkId, newDrink) => {
  console.log(drinkId);
  console.log(newDrink);
  try {
    const { data } = await axios.patch(`/water/drinks/${drinkId}`, newDrink);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
