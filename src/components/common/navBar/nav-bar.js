import { selectScreenStack } from '../../../redux/reducers/stackReducer'
import { logStateAndPoop } from '../../../redux/thunks/selectionThunks'
import { clearCache } from '../../../redux/actions/rootActions'
import { popStack } from '../../../redux/actions/stackActions'
import {
  useAppDispatch,
  useAppSelector
} from '../../../hooks/reduxhooks'
import "./navBar.css"
import { selectMenuIsOpen } from '../../../redux/reducers/menuReducer'

export default function NavBar() {
  const dispatch = useAppDispatch()

  const stack= useAppSelector(selectScreenStack)
  const isOpen = useAppSelector(selectMenuIsOpen)

  return (
    <div className='nav-bar'>
      {stack.length > 1?
        <img
          className="back-button"
          alt="heart"
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
          onClick={()=>dispatch(popStack)}
        />:
        <img
          className="logo"
          alt="heart"
          src="https://img.icons8.com/plasticine/512/monitor.png"
          onClick={()=>dispatch(clearCache)}
        />
      }
      {isOpen?
        <img
          className="logo"
          alt="heart"
          src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/512/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-regular-tal-revivo.png"
          onClick={()=>dispatch(logStateAndPoop('poop'))}
        />:
        <img
          className="logo"
          alt="heart"
          src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/512/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-bold-tal-revivo.png"
          onClick={()=>dispatch(logStateAndPoop('poop'))}
        />
      }
    </div>
  )
}
