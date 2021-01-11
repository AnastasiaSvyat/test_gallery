import {combineReducers} from 'redux'
import FetchReducer from './fetchReducer';
import picture_Active from './picture-active';


const allReducers = combineReducers({
    fetchReducer : FetchReducer,
    active : picture_Active

})


export default allReducers


