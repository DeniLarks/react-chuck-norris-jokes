import { combineReducers } from "redux";
import { factsReducer } from "./factsReducer";
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  facts: factsReducer,
  app: appReducer
})