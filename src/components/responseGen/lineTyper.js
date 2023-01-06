import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/reduxhooks'
import { selectSelectionIsTyping } from '../../redux/reducers/selectionReducer'

export default function LineTyper(props) {

    const [idx, setIdx] = useState(0)
    const [typed, setTyped] = useState('')
    const isTyping = useAppSelector(selectSelectionIsTyping)
    useEffect(()=>{

        if(idx<=props.line?.length){
            setTimeout(()=>{
                setTyped(props.line.slice(0,idx))
                setIdx(prev => prev + 1)
            },50)
        }

    },[props.line,idx])


  return (

    //each string has to be iterated over

    <div>
        <div>{isTyping? typed:props.line}</div>
    </div>
  )
}
