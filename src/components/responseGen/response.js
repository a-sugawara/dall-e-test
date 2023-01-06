import { selectSelectionIsTyping, selectSelectionResponse } from "../../redux/reducers/selectionReducer"
import { conditionalRender } from "../../helpers/conditionalRender"
import { useAppSelector } from '../../hooks/reduxhooks'
import "./response.css"
import LineTyper from "./lineTyper"
import { useEffect, useState } from "react"


export default function Response() {

  const responseArray = useAppSelector(selectSelectionResponse)
  const isTyping = useAppSelector(selectSelectionIsTyping)

  const [index, setIndex] = useState(0)
  const [render, setRender] = useState([])

  useEffect(() => {
    if(index < responseArray?.length) {
    setTimeout(() => {
      setIndex(prev => prev + 1)
      setRender(responseArray.slice(0,index+1))
    }, 75*responseArray[index].length)
    }
  },[responseArray, index])

  return conditionalRender(
    responseArray,
    <div className="response-format">
        <div className="response-text">
            {isTyping?
              render?.map(
                (line, i) =>(
                <LineTyper
                  line = {line}
                />)
              ):
              responseArray?.map(
                (line, i) =>(
                <LineTyper
                  line = {line}
                />)
              )
            }
        </div>
    </div>
  )

}
