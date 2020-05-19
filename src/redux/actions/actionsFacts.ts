import { FETCH_RANDOM_FACT, SAGA_FETCH_RANDOM_FACT, SAGA_FETCH_CATEGORIES_FACTS, FETCH_CATEGORIES_FACTS } from './typesAction'
import { IFact, IActionRandomFact, IActionDefault, IActionCategories } from '../../interfaces';


export const sagaActionFetchRandomFact = (): IActionDefault => {
  return {
    type: SAGA_FETCH_RANDOM_FACT
  }
}
export const actionFetchRandomFact = (fact: IFact): IActionRandomFact => {
  return {
    type: FETCH_RANDOM_FACT,
    payload: fact
  }
}

export const sagaActionFetchCategories = ():IActionDefault => {
  return {
    type: SAGA_FETCH_CATEGORIES_FACTS
  }
}
export const actionFetchCategories = (categories: string[]): IActionCategories => {
  return {
    type: FETCH_CATEGORIES_FACTS,
    payload: categories
  }
}