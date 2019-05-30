import {
  OPERATION_FAILED,
  API_LOADING,
  GET_FLAVORS_SUCCESS
} from '../constants/actionTypes'

import {
    fetchDataService,
} from './apis'

export function fetchingData () {
  return {
      type: API_LOADING,
  }
}

export function operationFailed (errors) {
  return {
      type: OPERATION_FAILED,
      errors
  }
}

export function getFlavorsSuccess(result) {
  return {
      type: GET_FLAVORS_SUCCESS,
      result
  }
}

export function getFlavors() {
  
  return (dispatch, getState) => {
      dispatch(fetchingData())
      return fetchDataService('/flavors')
      .then((response) => {
          if (!response.errors) {
            console.log('response', response)
            dispatch(getFlavorsSuccess(response.data))
            return response.data;
          } else {
            dispatch(operationFailed(response.errors))
          }
      })
      .catch((err) => {
          dispatch(operationFailed(err))
      })
  }
}