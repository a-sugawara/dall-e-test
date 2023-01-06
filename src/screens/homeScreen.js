import LoadingOverlay from '../components/common/overlays/loadingOverlay'
import MainController from '../components/controller/mainController'
import ConditionalImage from '../components/imageGen/conditionalImage'
import Response from '../components/responseGen/response'
import MenuDrawer from '../components/menu/menuDrawer'
import "./screens.css"

export default function HomeScreen() {
    return (
        <div className="main">
                <MainController/>
                <div className='response-wrapper'>
                    <LoadingOverlay >
                        <ConditionalImage />
                        <Response/>
                    </LoadingOverlay>
                </div>
                <MenuDrawer/>
        </div>
    )
}
