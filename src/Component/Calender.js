import { React, useState } from 'react';
import DatePicker from 'sassy-datepicker';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';



function Calender() {
    // const [value, onChange] = useState(new Date());
    // return (
    //     <div>
    //         <Calendar onChange={onChange} value={value} />
    //     </div>
    // );
    const onChange = (date) => {
        console.log(date.toString());
      };
    
      return (
        <DatePicker onChange={onChange} />
      );
}

export default Calender;