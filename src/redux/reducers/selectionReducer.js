const ANSWER = "answer"
const POEM = "poem"
const SUMMARY = "summary"
const IMAGE = "image"
const TUTORIAL = "tutorial"
const GENIMAGE = "setImage"
const GENRES = "setRes"
const GENLOADING = "setLoading"
const CLEAR = "clear"

const initialState = {
    loading:false,
    promptType: ANSWER,
    tutorial: true,
    image: null,
    response: null,
    isTyping: true
}

export const selectSelectionIsTyping = state=> state.selection.isTyping
export const selectSelectionPromptType = state=> state.selection.promptType
export const selectSelectionLoading = state=> state.selection.loading
export const selectSelectionTutorial = state=> state.selection.tutorial
export const selectSelectionImage = state=> state.selection.image
export const selectSelectionResponse = state=> state.selection.response

export default function selectionReducer(state = initialState, action) {
  const newState = {...state}
  switch (action.type) {
      case ANSWER: {
          return {
            ...newState,
            promptType: ANSWER
          }
      }
      case POEM: {
        return {
            ...newState,
            promptType: POEM
        }
    }
    case SUMMARY: {
        return {
            ...newState,
            promptType: SUMMARY
        }
    }
    case IMAGE: {
        return {
            ...newState,
            promptType: IMAGE
        }
    }
    case TUTORIAL: {
        return {
            ...newState,
            tutorial: false
        }
    }
    case GENIMAGE: {
        return {
            ...newState,
            image: action.image
        }
    }
    case GENRES: {
        return {
            ...newState,
            response: action.response
        }
    }
    case GENLOADING: {
        return {
            ...newState,
            loading: action.loading
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
