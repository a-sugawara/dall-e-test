

import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../App';
import NavBar from '../../components/common/navBar/nav-bar';
import HomeScreen from '../../screens/homeScreen';
import store from "../../store"


describe("<App>",() => {
  const component = () => render(
  <App />,
  { wrapper: ReduxWrapper },
  );

  it('should be a div with a class of "App"',() => {

    expect(component().is(".App")).toEqual(true)

  })

  it ('should render the <HomeScreen/>', () => {

    expect(component().find(HomeScreen)).toHaveLength(1)

  });
  it ('should render the <NavBar/>', () => {

    expect(render().find(NavBar)).toHaveLength(1)

  });
})



// describe("<App>",() => {
//   const render = () => shallow(<App />);

//   it('should be a div with a class of "App"',() => {

//     expect(render().is(".App")).toEqual(true)
//   })

//   it ('should render the <HomeScreen/>', () => {

//     expect(render().find(HomeScreen)).toHaveLength(1)

//   });
//   it ('should render the <NavBar/>', () => {

//     expect(render().find(NavBar)).toHaveLength(1)

//   });
// })
