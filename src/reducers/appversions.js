const initialState = {
  versions: 'V.3.2 Ref. 01',
}

export default (state = initialState,action) => {
    switch (action.type) {
      case "APP_VERSIONS":
        return action.payload
      default:
      return state;
    }

}
