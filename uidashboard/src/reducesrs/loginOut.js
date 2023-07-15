


import { deprecatedPropType } from "@mui/material"

const initialState = 0
const loginOut = (state = initialState, action) => {

    switch (action.type) {
        case "login": return state + 1
        case "logout": return state + 2
        default: state
    }



}

export default loginOut;