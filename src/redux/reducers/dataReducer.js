const FETCH_SUCCESS = 'FETCH_SUCCESS';

const initialState = [];

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchRequest = () => async (dispatch) => {
  const request = await fetch('https://hello-ali-backend.herokuapp.com/v1/messages');
  const getFetch = await request.json();
  dispatch(fetchSuccess(getFetch));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
