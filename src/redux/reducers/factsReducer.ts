import { IStateFacts, IActionRandomFact, IActionCategories } from '../../interfaces';
import { FETCH_RANDOM_FACT, FETCH_CATEGORIES_FACTS } from '../actions/typesAction';

const initialState: IStateFacts = {
  facts: [],
  randomFact: null,
  categories: []
}

export const factsReducer = (state: IStateFacts = initialState, 
          action: IActionRandomFact | IActionCategories) => {
  switch (action.type) { 
    case FETCH_RANDOM_FACT:
      return {...state, randomFact: action.payload}
    case FETCH_CATEGORIES_FACTS:  
      return {...state, categories: action.payload}
    default: return state
  }
}