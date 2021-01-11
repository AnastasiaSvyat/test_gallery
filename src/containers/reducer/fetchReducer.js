const initialState = {
    arr: [],
};
function FetchReducer(state = initialState, action){
    switch (action.type) {
    case 'REQUESTED_PICTURE':
      return {
        arr: [],
      };
    case 'REQUESTED_PICTURE_SUCCEEDED':
      return {
        arr: action.arr,
      };
    case 'REQUESTED_PICTURE_FAILED':
      return {
        arr: [],
      };
    default:
      return state;
    }
  };
    
export default FetchReducer 