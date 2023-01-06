import { selectSelectionPromptType } from '../../redux/reducers/selectionReducer'
import { selectStyleInput} from "../../redux/reducers/inputReducers"
import { setStyle } from "../../redux/actions/inputActions"
import {
  useAppDispatch,
  useAppSelector
} from "../../hooks/reduxhooks"
import "./inputs.css"

export default function StyleInput() {
  const dispatch = useAppDispatch()
  const promptType = useAppSelector(selectSelectionPromptType)
  const style = useAppSelector(selectStyleInput)

  return (
    <input
      placeholder="Enter Style (optional)"
      className="input"
      value={style}
      disabled={promptType !== "poem" && promptType !== "image"}
      onChange={e=>dispatch(setStyle(e.target.value))}
    />
  )
}
