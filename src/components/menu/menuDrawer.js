import { selectMenuIsOpen } from '../../redux/reducers/menuReducer'
import { menuToggle } from '../../redux/actions/menuActions'
import { screenNames } from '../../stackNavigator/screens'
import MenuButtons from './menuButtons'
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks/reduxhooks'
import "./menu.css"

export default function MenuDrawer() {
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(selectMenuIsOpen)

  return (<>
    <div className={`drawer-${isOpen}`}>
      <MenuButtons
        screen={screenNames.HOME}
        iconUrl={"https://img.icons8.com/ios-filled/512/prefab-house.png"}
        />
      <MenuButtons
        screen={screenNames.ABOUT}
        iconUrl={"https://img.icons8.com/ios-filled/512/info.png"}
        />
      <MenuButtons
        screen={screenNames.CONTACT}
        iconUrl={"https://img.icons8.com/ios-filled/512/contact-card.png"}
      />
    </div>
    <div
      className={`background-${isOpen}`}
      onClick={()=>dispatch(menuToggle)}
    />
  </>
  )
}
