import { takeEvery, put } from 'redux-saga/effects';
import { SAGA_FETCH_CATEGORIES_FACTS } from '../actions/typesAction';
import { actionFetchCategories } from '../actions/actionsFacts';

export function* sagaWatcherCategories() {
  yield takeEvery(SAGA_FETCH_CATEGORIES_FACTS, sagaFetchCategories)
}

// Categories -->
function* sagaFetchCategories() {
  const payload = yield fetchCategories()
  yield put(actionFetchCategories(payload))
}

async function fetchCategories() {
  const response = await fetch('https://api.chucknorris.io/jokes/categories')
  return await response.json()
}
// <-- Categories