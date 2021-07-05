import {ADD_DATA_SUCCESS} from '../actionType';
import {ADD_DATA_ERROR} from '../actionType'

export const postSuccess=(data)=>
{
    console.log("this data in postsuccess method",data)
    return {
        type:ADD_DATA_SUCCESS,
        payload:data
                }
}
export const postError=(error)=>
{
    console.log("this data in postsuccess method",error)
    return {
        type:ADD_DATA_ERROR,
        payload:error
                }
}

