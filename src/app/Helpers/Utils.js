const currentDate = new Date();

const date = currentDate.getDate();
const month = currentDate.getMonth(); 
const year = currentDate.getFullYear();

const DateValue = date + "-" +(month + 1) + "-" + year;

export default DateValue;