
import { selectSelectionTutorial } from '../../redux/reducers/selectionReducer'
import { tutorial } from '../../redux/actions/selectionActions'
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks/reduxhooks'

export default function ControllerTutorial() {

  const dispatch = useAppDispatch()
  const isTutorialOn = useAppSelector(selectSelectionTutorial)
  return (<>
    {isTutorialOn ? <div className="controller-container">
      <div
        className="top-bar"
        onClick={()=>dispatch(tutorial)}
      />
        <div>
          <p> - Select prompt type </p>
          <p> - enter question / prompt </p>
          <p> - profit</p>
        </div>
    </div>:
    null
    }
  </>
  )
}
