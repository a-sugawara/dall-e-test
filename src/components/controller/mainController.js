import ControllerTutorial from './controllerTutorial';
import GenButton from '../genButton/genButton';
import PromtInput from '../inputs/promt';
import StyleInput from '../inputs/style';
import Legend from '../legend/legend';
import "./controller.css";

export default function MainController() {

  return (
    <div className="flex-column">
      <ControllerTutorial/>
      <div className="controller-container">
        <div className="top-bar"/>
        <Legend />
        <PromtInput />
        <StyleInput />
        <GenButton />
      </div>
    </div>
  )
}
