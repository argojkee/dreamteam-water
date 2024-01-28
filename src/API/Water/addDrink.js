import axios from 'axios';

export const addDrink = async data => {
  try {
    await axios.post('/water/drinks', data);
  } catch (error) {
    console.log(error.message);
  }
};
