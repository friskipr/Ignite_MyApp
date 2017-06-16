import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import GUID from '../Lib/GUID'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getData: null,
  add: ['data'],
  delete: ['id'],
  update: ['id', 'name', 'title']
})

export const InventoryTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  items: [],
  fetching: null
})

/* ------------- Reducers ------------- */

// attempting to get data from db
export const request = (state) => state.merge({ fetching: true })

// add item
export const add = (state, itemObj) => {
  itemObj.data["ID"] = GUID.createGUID()
  return state.merge({ fetching: false, items: [...state.items, itemObj] })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DATA]: request,
  [Types.ADD]: add
})