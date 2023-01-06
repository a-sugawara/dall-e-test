import {shallow} from 'enzyme'
import * as redux from '../../hooks/reduxhooks';
import HomeScreen from '../../screens/homeScreen';
import LoadingOverlay from '../../components/common/overlays/loadingOverlay';
import MainController from '../../components/controller/mainController';
import ConditionalImage from '../../components/imageGen/conditionalImage';
import Response from '../../components/responseGen/response';
import MenuDrawer from '../../components/menu/menuDrawer';
import { menuToggle } from '../../actions/menuActions';

describe("<HomeScreen>",() => {
    const any =(overrides) => {
        return{
            props: {},
            state:{},
            ...overrides
        }

    }

  const render = (any) => shallow(<HomeScreen {...any}/>);

  it('should be a div with a class of "App"',() => {

    expect(render().is(".main")).toEqual(true)

    jest.spyOn(redux.useAppDispatch(props.menuToggle)).mockReturnValue(null)
    redux.useAppDispatch(props.menuToggle)
    expect(redux.useAppDispatch).toHaveBeenCalledWith(menuToggle)
  })

  it ('should render the <LoadingOverlay/>', () => {

    expect(render().find(LoadingOverlay)).toHaveLength(1)

  });
  it ('should contain the <MainController/>', () => {

    expect(render().find(MainController)).toHaveLength(1)

  });
  it ('should contain the <ConditionalImage/>', () => {

    expect(render().find(ConditionalImage)).toHaveLength(1)

  });
  it ('should contain the <Response/>', () => {

    expect(render().find(Response)).toHaveLength(1)

  });
  it ('should contain the <MenuDrawer/>', () => {

    expect(render().find(MenuDrawer)).toHaveLength(1)

  });

})
