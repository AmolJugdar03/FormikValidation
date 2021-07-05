import { postSuccess } from "../action/Adddata";
import { postError } from "../action/Adddata";
import axios from "axios";
export const addData = (objdata) => dispatch => {

   console.log("data from addData actions",objdata)
   axios.post('http://localhost:3003/data', objdata)
    .then(res => {
      dispatch(postSuccess(res.data))
      console.log("data after DriverSuccess",res.data)
    })
    .catch(err => {
        dispatch(postError(err.message))
    })
}
