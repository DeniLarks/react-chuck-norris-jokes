import { combineReducers } from "redux";
import { factsReducer } from "./factsReducer";

export const rootReducer = combineReducers({
  facts: factsReducer
})