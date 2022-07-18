import { CHANGE_NAME, FETCH_COMMENTS } from "./actionTypes"



export const changeName = () => {
    return {
        type: CHANGE_NAME
    }
}
export const fecthComments = () => {
    return {
        type: FETCH_COMMENTS
    }
}