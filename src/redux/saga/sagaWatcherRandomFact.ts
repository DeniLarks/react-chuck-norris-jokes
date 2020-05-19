import { takeEvery, put } from 'redux-saga/effects';
import { SAGA_FETCH_RANDOM_FACT } from '../actions/typesAction';
import { actionFetchRandomFact } from '../actions/actionsFacts';
import { IFact } from '../../interfaces';
import { translateText } from './translateText';

export function* sagaWatcherRandomFact() {
  yield takeEvery(SAGA_FETCH_RANDOM_FACT, sagaFetchRandomFact)
}


// Random fact -->
function* sagaFetchRandomFact() {
  const payload = yield fetchRandomFact()
  const translate = yield translateText(payload.value)

  const fact: IFact = {
    id: payload.id,
    icon: payload.icon_url,
    value: payload.value,
    translateValue: translate
  }
  
  yield put(actionFetchRandomFact(fact))
}

async function fetchRandomFact() {
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  return await response.json()
}
// <-- Random fact