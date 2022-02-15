const initalState = {
  isLoading: false,
  isError: false,
  message: "",
  getall: [],
  pageInfo: {},
};

const getall = (state = initalState, action) => {
  switch (action.type) {
    case "GETALL_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "GETALL_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
        all: action.payload.data.data,
      };
    }
    case "GETALL_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
        all: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default getall;
