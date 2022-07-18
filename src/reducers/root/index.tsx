import { combineReducers } from 'redux';
import headerReduser from '../headerReducer/headerReducer';



const rootReducer = combineReducers(
    {
        'header': headerReduser
    }
)


export default rootReducer



