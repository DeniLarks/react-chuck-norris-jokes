import { IStateApp, IActionDefault } from '../../interfaces';
import { APP_LOAD_FACT, APP_NOT_LOAD_FACT } from '../actions/typesAction';

const initialState: IStateApp = {
  loadFact: false
}

export const appReducer = (state: IStateApp = initialState, action: IActionDefault): 
    IStateApp => {
  switch (action.type) {
    case APP_LOAD_FACT: return {...state, loadFact: true}
    case APP_NOT_LOAD_FACT: return {...state, loadFact: false}
    default: return state
  }
}

