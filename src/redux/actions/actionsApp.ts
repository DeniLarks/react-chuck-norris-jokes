import { IActionDefault } from '../../interfaces';
import { APP_LOAD_FACT, APP_NOT_LOAD_FACT } from './typesAction';

export const loadFact = (): IActionDefault => {
  return { type: APP_LOAD_FACT }
}

export const notLoadFact = (): IActionDefault => {
  return { type: APP_NOT_LOAD_FACT }
}