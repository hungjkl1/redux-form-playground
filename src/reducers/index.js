import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form/immutable";
const reducer = combineReducers({
  form: reduxFormReducer
});
export default reducer;
