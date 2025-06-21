// 1. Estado inicial
export const initialState = {
  step: 1,
  formData: {
    name: '',
    email: '',
    password: ''
  }
}

// 2. Función reductora
export function formReducer (state, action) {
  switch (action.type) {
    case 'NEXT_STEP':
      return {
        ...state,
        step: state.step + 1
      }
    case 'PREV_STEP':
      return {
        ...state,
        step: state.step - 1
      }
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value
        }
      }
    case 'RESET':
      return {
        initialState
      }
    default:
      return state
  }
}
