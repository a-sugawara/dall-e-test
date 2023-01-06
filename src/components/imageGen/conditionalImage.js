import {
  useEffect,
  useState
} from 'react'

import { selectSelectionImage, selectSelectionLoading } from '../../redux/reducers/selectionReducer'
import { conditionalRender } from '../../helpers/conditionalRender'
import { useAppSelector } from '../../hooks/reduxhooks'
import "./image.css"

export default function ConditionalImage() {

  useEffect(()=>{

  },[])

  const image = useAppSelector(selectSelectionImage)
  const isLoading = useAppSelector(selectSelectionLoading)
  return conditionalRender(
      image,
      <img
        className={`ai-image blur-${isLoading}`}
        alt={"AIIMAGE"}
        src={image}
      />
    )}
