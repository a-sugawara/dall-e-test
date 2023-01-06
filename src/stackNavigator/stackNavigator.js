import { selectCurrentScreen } from "../redux/reducers/stackReducer"
import { useAppSelector } from "../hooks/reduxhooks"
import { screens } from "./screens"



const StackNavigator = () => {
  const currentScreen = useAppSelector(selectCurrentScreen)
  return screens[currentScreen]
}

export default StackNavigator
