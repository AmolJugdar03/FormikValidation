import {ADD_DATA_ERROR}from '../actionType'
import {ADD_DATA_SUCCESS} from '../actionType'
const initialstate={
    addData:[],
    error:null
}
export function AdddataReducer(state=initialstate,action)
{
switch(action.type)
{
    case ADD_DATA_SUCCESS:
        console.log("this is from our new reducer",action.payload)
            return {...state, 
                error: null,
                addData: [...state.addData, action.payload]
            };
            case ADD_DATA_ERROR:
                    return {
                ...state, 
                error: action.payload.error,
            };
    default :
          return state; 
}
}

