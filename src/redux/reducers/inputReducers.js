const CLEAR = "clear"
const SETPROMPT = "setPrompt"
const SETSTYLE = "setStyle"


const initialState = {
    prompt: '',
    style: ''
}

export const selectPromtInput = (state) =>(state.input.prompt)
export const selectStyleInput = (state) =>(state.input.Style)

export default function inputReducer(state = initialState, action) {

  const newState = {...state}
  switch (action.type) {

    case SETPROMPT: {
      return {
        ...newState,
        prompt: action.prompt
      }
    }
    case SETSTYLE: {
      return {
        ...newState,
        style: action.style
      }
    }
    case CLEAR:{
      return {
        ...initialState
      }
    }
    default:

      return state
  }
}
