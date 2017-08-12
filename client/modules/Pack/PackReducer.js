import { GET_ITEM} from './PackActions';

const initialState = { data: [] };

const PackReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case GET_ITEM:

      return {...state, item: action.payload}

      
  //   default:
  //     return state;
  // }
};

export default PackReducer;
