import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_START } from "../../actions/actionTypes"


const initialState = {
    commentsList: [],
    commentsLoading: false
}


const commentsReduser = (state = initialState, action: any): any => {
    switch (action.type) {
        case FETCH_COMMENTS_START:
            return { ...state, commentsLoading: true }

        case FETCH_COMMENTS_SUCCESS:
            return { ...state, commentsList: action.payload, commentsLoading: false }
        default:
            return state
    }

}


export default commentsReduser