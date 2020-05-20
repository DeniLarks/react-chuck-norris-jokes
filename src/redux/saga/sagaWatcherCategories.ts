import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA_FETCH_CATEGORIES_FACTS } from '../actions/typesAction';
import { actionFetchCategories } from '../actions/actionsFacts';

export function* sagaWatcherCategories() {
  yield takeLatest(SAGA_FETCH_CATEGORIES_FACTS, sagaFetchCategories)
}

// Categories -->
function* sagaFetchCategories() {
  const payload = yield call(fetchCategories)
  yield put(actionFetchCategories(payload))
}

async function fetchCategories() {
  const response = await fetch('https://api.chucknorris.io/jokes/categories')
  return await response.json()
}
// <-- Categories