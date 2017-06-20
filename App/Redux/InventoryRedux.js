import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import GUID from '../Lib/GUID'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getData: null,
  add: ['data'],
  get: ['id'],
  delete: ['id'],
  update: ['id', 'data']
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

// get all data
export const getData = (state) => state.items

// add item
export const add = (state, itemObj) => {  
  itemObj.data["ID"] = GUID.createGUID()
  
  return state.merge({ fetching: false, items: [...state.items, itemObj.data] })
}

// get by guid
export const get = (state, id) => {
  let a = state.items.filter(x => x.ID === id)
  
  return state.items.filter(x => x.ID === id)
}

// update item
export const update = (state, itemObj) => {
  let newState = state.items.flatMap(x => {
    if (x.ID === itemObj.id) {
      return x.merge(itemObj.data)
    } else {
      return x
    }
  })

  return state.merge({ fetching: false, items: newState })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DATA]: getData,
  [Types.ADD]: add,
  [Types.GET]: get,
  [Types.UPDATE]: update
})