import {
    Configuration,
    OpenAIApi
  } from "openai";

  import * as selection from "../../redux/actions/selectionActions"
  import * as stack from "../../redux/actions/stackActions"
  import { parcedResponse } from "../../helpers/responseParcer";
  import { menuToggle } from "../../redux/actions/menuActions"

const key = process.env.REACT_APP_API_KEY

const configuration = new Configuration({apiKey: key});

const openai = new OpenAIApi(configuration);

export function logStateAndPoop(_poop) {
    return async function fetchTodoByIdThunk(dispatch) {

      dispatch(menuToggle)
    }
}


export const generateImage = () => {
    return async (dispatch, getState) => {
        dispatch(selection.setLoading(true))
        const state = getState()
        try{
          const response = await openai.createImage({
            prompt:`${state.input.prompt}${state.input.style?" in the style of " + state.input.style: ""}`,
            n: 1,
            size: "1024x1024",
          });
          dispatch(selection.setRes(null))
          dispatch(selection.setImage(response.data.data[0].url))
          dispatch(selection.setLoading(false))
        }catch{
          dispatch(selection.setRes(parcedResponse("error") ))
          dispatch(selection.setLoading(false))
        }




    }
}

export const generateAnswer = () => {
    return async (dispatch, getState) => {
        dispatch(selection.setLoading(true))
        const state = getState()

        try{
          const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt:`${state.input.prompt}`,
            max_tokens: 2048,
          });
          dispatch(selection.setImage(null))
          console.log(completion)
          dispatch(selection.setRes(parcedResponse(completion.data.choices[0].text)))
          dispatch(selection.setLoading(false))
        }catch{
          dispatch(selection.setRes(parcedResponse("error") ))
          dispatch(selection.setLoading(false))
        }
      }
    }

    export const generateBoth = () => {
      return async (dispatch, getState) => {
        dispatch(stack.addStack("about"))
        dispatch(selection.setLoading(true))
        const state = getState()
        try{
          let prePrompt = ""
          if(state.selection.promptType==="poem"){
            prePrompt ="A poem about "
          }
          if(state.selection.promptType==="summary"){
            prePrompt ="A summary about "
          }
          const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt:`${prePrompt}${state.input.prompt}${state.selection.promptType==="poem" && state.input.style?" in the style of " + state.input.style: ""}`,
            max_tokens: 2048,
          });

          const response = await openai.createImage({
            prompt:`${state.input.prompt}`,
            n: 1,
            size: "1024x1024",
          });

          dispatch(selection.setImage(response.data.data[0].url))
          dispatch(selection.setRes(parcedResponse(completion.data.choices[0].text)))
          dispatch(selection.setLoading(false))
        }catch{
          dispatch(selection.setRes(parcedResponse("error") ))
          dispatch(selection.setLoading(false))
        }
    }
}
