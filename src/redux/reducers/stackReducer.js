import pushOrPop from "../../helpers/stackHelpers/pushOrPop"

const ADDSTACK = "addStack"
const POPSTACK = "popStack"
const CLEAR = "clear"


const initialState = {
    screenStack: ["home"],
}

export const selectCurrentScreen = state=>state.stack.screenStack[state.stack.screenStack.length -1]
export const selectScreenStack = state=>state.stack.screenStack

export default function stackReducer(state = initialState, action) {
  const newState = {...state}
  switch (action.type) {
      case ADDSTACK: {
          const newStack = pushOrPop(newState.screenStack,action.screen)
          return  {
            ...newState,
            screenStack: [...newStack],
          }
      }
      case POPSTACK: {
        const newStack = [...newState.screenStack]
        newStack.pop()
          return {
            ...newState,
            screenStack: [...newStack],
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
