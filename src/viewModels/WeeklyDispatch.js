
import { changement } from '../reducers/reducers';

    function changeDay  (dispatch,index) {
      console.log(index)
      dispatch(changement(index))
    };
    function getDayName(dateString) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date(dateString);
        return days[date.getDay()];
      }
      
export  {changeDay,getDayName};