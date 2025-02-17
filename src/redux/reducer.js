const initialState = {
  modalOpen: false,
  theme: 'light',
  language: 'es'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    case "TOGGLE_LANGUAGE":
      return {
        ...state,
        language: state.language === 'es' ? 'en' : 'es'
      };
    default:
      return state;
  }
};

export default reducer;
