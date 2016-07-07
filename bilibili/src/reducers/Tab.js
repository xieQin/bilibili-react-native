import * as types from '../actions/ActionTypes';

const tabInitState = {
  selectedTab : 'essence'
}
export default function Tab (state=tabInitState , action={}){
  switch (action.type) {
    case types.TAB_CHANGE:
    console.log(action)
      return Object.assign(
        {} , state , {
          selectedTab : action.selectedTab
        }
      )
      break;
    default:
      return state;
  }
}