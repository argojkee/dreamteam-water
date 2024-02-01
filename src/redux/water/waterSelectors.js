export const getCurrentMonth = state => state.water.month;
export const getCurrentDay = state => state.water.dayInfo;
export const getRegisterDay = state => state.water.registerDay;
export const getIsMonthDataLoading = state => state.water.monthDataLoading;
export const getIsDayDataLoading = state => state.water.dayDataLoading;
export const getDayError = state => state.water.dayError;
export const getMonthError = state => state.water.monthError;

export const getCurrentPercentage = state => state.water.dayInfo?.percent;
export const getCurrentNorm = state => state.water.dayInfo?.norm;
