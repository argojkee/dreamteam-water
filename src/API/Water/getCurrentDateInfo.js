import axios from 'axios';

export const getCurrentDateInfo = async date => {
  try {
    const { data } = await axios.get('/water', date);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
