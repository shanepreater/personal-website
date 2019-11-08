const initialState = {
  message: null,
  title: null,
  type: "success"
};

const handlerMap = {
  "error/received": (state, action) => {
    const type = "danger";
    const title = action.title;
    const message = action.message;
    const newState = { ...state, title, message, type };
    console.log(newState);
    return newState;
  },
  "success/received": (state, action) => {
    const type = "success";
    const title = action.title;
    const message = action.message;
    return { ...state, title, message, type };
  },
  "warning/received": (state, action) => {
    const type = "warning";
    const title = action.title;
    const message = action.message;
    return { ...state, title, message, type };
  },
  clearFeedback: (state, action) => {
    return { ...state, message: null, type: null, title: null };
  }
};

export const feedbackReducer = (state, action) => {
  const handler = handlerMap[action.type];
  if (handler) {
    return handler(state, action);
  }
  return { ...state };
};

export const feedbackMessageSelector = state => state.feedback.message;

export const feedbackTypeSelector = state => state.feedback.type;

export const feedbackTitleSelector = state => state.feedback.title;

export const hasFeedbackSelector = state => state.feedback.message != null;
