const initialState = {
  data: [],
  error: [],
  message: [],
  status: 'new',
}

export default (state = initialState,action) => {
    switch (action.type) {
      case "LOAD_GetCategories_SUCCESS":
        return action.payload
      case "LOAD_GetCategories_FAILURE":
        return {
        ...state,
          data: [],
          error: [],
          message: 'Error, Please Contact admin.',
          status: 'error',
        }
      default:
      return state;
    }

}
