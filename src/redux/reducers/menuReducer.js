const MENUTOGGLE = "menuToggle"


const initialState = {
    isOpen: false,
}

export const selectMenuIsOpen = (state) =>(state.menu.isOpen)

export default function menuReducer(state = initialState, action) {

  switch (action.type) {

      case MENUTOGGLE: {
          return {
              isOpen: !state.isOpen
          }
      }
    default:

      return state
  }
}
