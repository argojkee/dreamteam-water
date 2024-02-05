//Data
export const getCurrentMonth = state => state.water.month;
export const getCurrentDay = state => state.water.dayInfo;
export const getDrinks = state => state.water.dayInfo?.drinks;
export const getRegisterDay = state => state.water.registerDay;
export const getCurrentPercentage = state => state.water.dayInfo?.percent;
export const getCurrentNorm = state => state.water.dayInfo?.norm;

//Loading
export const getIsMonthDataLoading = state => state.water.monthDataLoading;
export const getIsDayDataLoading = state => state.water.dayDataLoading;
export const getIsDeleting = state => state.water.isDeleting;
export const getIsAddingDrink = state => state.water.isAddDrinkLoading;
export const getIsEditingDrink = state => state.water.isEditingDrink;
export const getIsEditingNorm = state => state.water.isEditingNorm;

//Errors
export const getDayError = state => state.water.dayError;
export const getMonthError = state => state.water.monthError;
