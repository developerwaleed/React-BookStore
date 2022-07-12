// Action Types
const CHECK_STATUS = './categories/CHECK_STATUS';

// Action Creator
export const checkStatus = () => ({ type: CHECK_STATUS });

// Reducers
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoriesReducer;