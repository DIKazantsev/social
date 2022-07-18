import { CHANGE_NAME } from "../../actions/actionTypes"


const initialState = {
    login: '65kdi'
}


const headerReduser = (state = initialState, action: any): any => {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, login: '65MAS' }

        default:
            return state
    }

}


export default headerReduser