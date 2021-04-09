import {requestActionTypes} from './requestActionTypes'
import {AppDispatch} from '../../../store'

type ActionTypes = requestActionTypes.AUTHED_GET_REQUEST | requestActionTypes.AUTHED_POST_REQUEST | requestActionTypes.AUTHED_DELETE_REQUEST | requestActionTypes.UNAUTHED_GET_REQUEST | requestActionTypes.UNAUTHED_POST_REQUEST | requestActionTypes.AUTHED_PUT_REQUEST

export type httpRequest = {
    domain: string;
    url: string;
    type: ActionTypes
    successAction: AppDispatch,
    failureAction: AppDispatch,
    data:Object
}

export type httpRequestPayload = {
    domain: string;
    url: string;
    successAction: AppDispatch,
    failureAction: AppDispatch,
    data:any
}

interface createRequestAction {
    type: ActionTypes;
    payload: httpRequestPayload;
}


export type requestAction = createRequestAction


