import { selectSelectionPromptType } from '../../redux/reducers/selectionReducer'
import { typeAssign } from '../../redux/actions/selectionActions'
import {properCase} from "../../helpers/properCasing"
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks/reduxhooks'
import "./legend.css"

export default function TextSelect(props) {
  const dispatch = useAppDispatch()
  const promptType = useAppSelector(selectSelectionPromptType)

  return (
    <div
        className={`${promptType === props.type}-selected`}
        onClick={() => {
          dispatch(typeAssign(props.type))
        }}
    >
        {props.type==='answer'?'Question':`${properCase(props.type)}`}
    </div>
  )
}
