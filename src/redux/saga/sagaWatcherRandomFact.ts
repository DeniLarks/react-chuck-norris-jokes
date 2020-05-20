import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA_FETCH_RANDOM_FACT } from '../actions/typesAction';
import { actionFetchRandomFact } from '../actions/actionsFacts';
import { IFact, IActionSagaRandomFact } from '../../interfaces';
import { translateText } from './translateText';

export function* sagaWatcherRandomFact() {
  yield takeLatest(SAGA_FETCH_RANDOM_FACT, sagaFetchRandomFact)
}


// Random fact -->
function* sagaFetchRandomFact(action: IActionSagaRandomFact) {
  const payload = yield call(fetchRandomFact, action.category)
  const translate = yield call(translateText, payload.value)

  const fact: IFact = {
    id: payload.id,
    icon: payload.icon_url,
    value: payload.value,
    translateValue: translate
  }
  
  yield put(actionFetchRandomFact(fact))
}

async function fetchRandomFact(category: string) {
  
  const query = category 
        ? `?category=${category}` 
        : ''

  console.log('!!!', query)
  
  const response = await fetch(`https://api.chucknorris.io/jokes/random${query}`)
  return await response.json()
}
// <-- Random fact