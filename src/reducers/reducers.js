/* what noteReducer does is to change the state of the day in the store 
in our case the state is the index of the day that is clicked
the changement function is used to dispatch the action to the store
*/

const noteReducer = (state =0, action) => {
    switch(action.type) {
      case 'day':
        return action.payload
      default:
        return state
      }
    } 
  
  export const changement = (id) => {
    return {
      type: 'day',
      payload:  id 
    }
  }  
  
  export default noteReducer