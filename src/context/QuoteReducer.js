function QuoteReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_QUOTE":
      return {
        ...state,
        loading: false,
        quote: action.payload,
      };
    case "SET_AUTHOR_QUOTES":
      return {
        ...state,
        loading: false,
        authorQuotes: action.payload,
      };
    default:
      return state;
  }
}

export default QuoteReducer;
