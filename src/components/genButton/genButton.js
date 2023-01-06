import { selectSelectionPromptType } from '../../redux/reducers/selectionReducer'
import { selectPromtInput } from '../../redux/reducers/inputReducers'
import { generateResponse } from '../../helpers/generateResponse'
import { properCase } from '../../helpers/properCasing'
import {
  useAppSelector,
  useAppDispatch
} from '../../hooks/reduxhooks'
import "./button.css"

export default function GenButton() {
  const promptType = useAppSelector(selectSelectionPromptType)
  const words = useAppSelector(selectPromtInput)
  const dispatch = useAppDispatch()

  return (
    <button
      className="button"
      onClick={() => {generateResponse(promptType, dispatch, words )}}
    >
      {`Generate ${properCase(promptType)}`}
    </button>
  )
}
