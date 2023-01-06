import LoadingOverlay from '../components/common/overlays/loadingOverlay'
import ConditionalImage from '../components/imageGen/conditionalImage'
import Response from '../components/responseGen/response'
import "./screens.css"

export default function AboutScreen() {
  return (
    <div className="main">
      <div className='response-wrapper'>
        <LoadingOverlay>
          <ConditionalImage/>
          <Response />
        </LoadingOverlay>
      </div>
    </div>
  )
}
