import axios from 'axios';

export const getCurrentDateInfo = async date => {
  try {
    const { data } = await axios.post('/water', date);
    console.log(date);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
