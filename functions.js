const findTheNumberOfOddNumbers = (p_Array) => {
  let odd_num = p_Array.filter((element) => element % 2 == 1);
  return odd_num.length;
};

const getIndexOfFalseItem = (p_index) => {
const false_index = (element) => element == false;
return p_index.findIndex(false_index);
};

const filterNumbers = (p_filter_number) => {
const filter_result = p_filter_number.filter((a) => typeof a == "number");
return filter_result;
};

const generateEmailAddress = (element) => {
let genererate_email=element.map((person)=>{
  return person.toLowerCase()+"@gmail.com"
})
return genererate_email
};

export {
findTheNumberOfOddNumbers,
getIndexOfFalseItem,
filterNumbers,
generateEmailAddress,
};