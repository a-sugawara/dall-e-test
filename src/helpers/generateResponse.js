import { generateAnswer, generateBoth, generateImage } from "../redux/thunks/selectionThunks"

export const generateResponse = (promptType, dispatch) => {
    promptType==="image"?
      dispatch(generateImage()):
    promptType==="answer"?
      dispatch(generateAnswer()):
      dispatch(generateBoth())
}
