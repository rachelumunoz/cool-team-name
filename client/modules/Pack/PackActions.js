import axios from 'axios';
export const GET_ITEM = 'GET_ITEM';

const ROOT_URL = `http://api.walmartlabs.com/v1/items/35260717?format=json&apiKey=57b9f7nt3gqykhs8v4r89h9g`;


export function getItem() {
  const request = axios.get(`${ROOT_URL}`)

  return (dispatch)=>{
    request.then((data)=>{
      console.log(data)
      dispatch({type: GET_ITEM, payload: data})
    })
  }
}

