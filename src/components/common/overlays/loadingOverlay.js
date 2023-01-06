import { useAppSelector } from '../../../hooks/reduxhooks'
import {
  selectSelectionLoading,
  selectSelectionPromptType
} from '../../../redux/reducers/selectionReducer'

import "./overlays.css"

export default function LoadingOverlay(props) {
  const promptType = useAppSelector(selectSelectionPromptType)
  const isLoading = useAppSelector(selectSelectionLoading)
  return isLoading? (
    <div className='overlay'>
      <p className='overlay-font'>{`Generating ${promptType}`}</p>
      <img className="spinner" alt="heart" src="https://cdn.discordapp.com/attachments/915741036024827916/933638180786303036/SEEDHEARTHOLLOW.png"/>
    </div>
  ):
  <>{props.children}</>
}
