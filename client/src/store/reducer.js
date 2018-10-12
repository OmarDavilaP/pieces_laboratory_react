const intialState = {
  dTable: [],
  tableStructure: []
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "HANDLESTR":
      return { ...state, tableStructure: action.data };
  }
  return state;
};

export default reducer;
