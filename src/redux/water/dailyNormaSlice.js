import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

const InitialState = {
  gender: null,
  weight: '',
  time: 0,
  amountOfWater: '',
  error: null,
};

export const fetchDailyNormaWater = createAsyncThunk(
  'dailyNorma/etchDailyNormaWater',
  async (__, { rejectWithValue }) => {
    try {
      const dailyNormaWater = await axios.patch(
        'https://dreamteam-water-server.onrender.com/api/water/norm'
      );
      return dailyNormaWater;
    } catch (error) {
      return;
      rejectWithValue(error.message);
    }
  }
);
