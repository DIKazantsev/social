import { combineReducers } from 'redux';
import commentsReduser from '../commentsReducer/commentsReducer';
import headerReduser from '../headerReducer/headerReducer';



const rootReducer = combineReducers(
    {
        'header': headerReduser,
        'comments': commentsReduser,
    }
)


export default rootReducer



