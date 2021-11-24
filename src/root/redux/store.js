import { createStore, combineReducers} from "redux";
import list from "./reducers/list";

const rootReducer = combineReducers({
    list: list,    
  });

export const store = createStore(rootReducer)