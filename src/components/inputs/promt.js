import { selectPromtInput} from "../../redux/reducers/inputReducers"
import { setPrompt } from "../../redux/actions/inputActions"
import {
  useAppDispatch,
  useAppSelector
} from "../../hooks/reduxhooks"
import "./inputs.css"

export default function PromtInput() {
  const dispatch = useAppDispatch()
  const prompt = useAppSelector(selectPromtInput)
  return (
    <input
    placeholder="Enter Prompt / Topic here"
    className="input"
    value={prompt}
    onChange={e=>dispatch(setPrompt(e.target.value))}
  />
  )
}
