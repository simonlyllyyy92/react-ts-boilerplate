import {
  call,
  CallEffect,
  fork,
  put,
  PutEffect,
  select,
  SelectEffect,
  takeEvery
} from 'redux-saga/effects'
import { requestActionTypes } from '../actionTypes/requestActionTypes'
import { requestAction } from '../actionTypes/requestInterface'
import { pathJoin } from '../utils/pathJoin'
import { config } from '../../../config/config'
import { RootState } from '../../index'
import { REQUEST_EXCEPTION } from '../actionTypes/requestActionTypes'
import { httpFetch } from '../utils/httpFetch'
import { AnyAction, Dispatch } from 'redux'

/**
 * @Handler
 */
function* handleRequests(
  action: requestAction
): Generator<
  | SelectEffect
  | CallEffect<void>
  | PutEffect<
      | {
          type: Dispatch<AnyAction>
          payload: any
        }
      | { type: requestActionTypes }
    >,
  void,
  any
> {
  const { type, payload } = action
  const { url, successAction, failureAction, data } = payload

  // Request should always follow AUTH_METHOD_REQUEST format
  const requestParams: string[] = type.split('_')
  const requestMethod: string = requestParams[1]

  let accessToken = null
  let locale = null

  if (requestParams[0] === 'AUTHED') {
    accessToken = yield select((state: RootState) => state)
  }

  let body = data.body
  let queryParams = data.params

  const apiUrl = pathJoin(config.API.serverUrl, url)
  try {
    const response = yield call(httpFetch, {
      method: requestMethod,
      url: apiUrl,
      formData: body,
      queryParams,
      accessToken
    })
    yield put({ type: successAction, payload: response })
  } catch (e) {
    console.log('exception from request saga', e)
    if (e && e.type === REQUEST_EXCEPTION) {
      yield put({ type: failureAction, payload: { ...e.payload } })
      // todo: if user ever hit unauthed exception
      // clean up user auth state and show login screen
    } else {
      yield put({ type: failureAction, payload: e })
    }
  } finally {
    yield put({ type: requestActionTypes.REQUEST_COMPLETED })
  }
}

/**
 * @Watcher
 */

function* watchRequests() {
  yield takeEvery(
    [
      requestActionTypes.AUTHED_DELETE_REQUEST,
      requestActionTypes.UNAUTHED_GET_REQUEST,
      requestActionTypes.UNAUTHED_POST_REQUEST,
      requestActionTypes.AUTHED_GET_REQUEST,
      requestActionTypes.AUTHED_POST_REQUEST,
      requestActionTypes.AUTHED_PUT_REQUEST
    ],
    handleRequests
  )
}

const sagas = [fork(watchRequests)]

export default sagas
