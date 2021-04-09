import {requestAction, httpRequest} from '../actionTypes/requestInterface'
import {requestActionTypes} from '../actionTypes/requestActionTypes'


export const getAuthed = ({ domain, url, successAction, failureAction, data = {} } : httpRequest ) => {
  return createRequestAction({
    domain,
    type: requestActionTypes.AUTHED_GET_REQUEST,
    url,
    successAction,
    failureAction,
    data
  });
};

export const getUnAuthed = ({ domain, url, successAction, failureAction, data = {} } : httpRequest) => {
  return createRequestAction({
    domain,
    type: requestActionTypes.UNAUTHED_GET_REQUEST,
    url,
    successAction,
    failureAction,
    data
  });
};

export const postAuthed = ({ domain, url, successAction, failureAction, data = {} } : httpRequest) => {
  return createRequestAction({
    domain,
    type: requestActionTypes.AUTHED_POST_REQUEST,
    url,
    successAction,
    failureAction,
    data
  });
};

export const postUnauthed = ({ domain, url, successAction, failureAction, data = {} } : httpRequest) => {
  return createRequestAction({
    domain,
    type: requestActionTypes.UNAUTHED_POST_REQUEST,
    url,
    successAction,
    failureAction,
    data
  });
};

export const deleteAuthed = ({ domain, url, successAction, failureAction, data = {} } : httpRequest) => {
  return createRequestAction({
    domain,
    type: requestActionTypes.AUTHED_DELETE_REQUEST,
    url,
    successAction,
    failureAction,
    data
  });
};

export const putAuthed = ({ domain, url, successAction, failureAction, data = {} } : httpRequest) => {
  return createRequestAction({
    domain,
    type: requestActionTypes.AUTHED_PUT_REQUEST,
    url,
    successAction,
    failureAction,
    data
  });
};

export const createRequestAction = ({ domain, type, url, successAction, failureAction, data = {} } : httpRequest) : requestAction => ({
    type,
    payload: {
      domain,
      url,
      successAction,
      failureAction,
      data
    }
});
  