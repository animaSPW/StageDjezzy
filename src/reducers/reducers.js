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