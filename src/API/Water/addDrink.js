import axios from 'axios';

export const addDrink = async data => {
  console.log(data);
  try {
    const result = await axios.post('/water/drinks', data);
    console.log(result);
    console.log('Hello');
  } catch (error) {
    console.log(error.message);
  }
};
