import ContactScreen from "../screens/contactScreen"
import AboutScreen from "../screens/aboutScreen"
import HomeScreen from "../screens/homeScreen"

export const screens = {
    about: <AboutScreen />,
    contact: <ContactScreen />,
    home :<HomeScreen />
}

export const screenNames = Object.keys(screens)
.reduce((accum,key) => {
    const newAccum = {...accum}
    newAccum[key.toUpperCase()] = key
    return newAccum
},{})
