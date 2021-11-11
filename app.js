//DOM Elements
const hourEl = document.querySelector('.hour');
const minutEl = document.querySelector(".minute");
const valueEl = document.querySelector(".value");

const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const percentEl = document.querySelector(".percent");

const additionEl = document.querySelector(".addition");
const substractionEl = document.querySelector(".substraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".division");
const equalEl = document.querySelector(".equal");


const decimalEl = document.querySelector(".decimal");
const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");
const number3El = document.querySelector(".number-3");
const number4El = document.querySelector(".number-4");
const number5El = document.querySelector(".number-5");
const number6El = document.querySelector(".number-6");
const number7El = document.querySelector(".number-7");
const number8El = document.querySelector(".number-8");
const number9El = document.querySelector(".number-9");
const number0El = document.querySelector(".number-0");

const numberElArray = [
    number0El, number1El, number2El, number3El, number4El, number5El, number6El, number7El, number8El, number9El
];

//variables
let valueStrInMemory= null;
let operatorInMemory=null;

// Functions
const getValueAsStr = () => valueEl.textContent.split(',').join('');

const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
}


const setStrAsValue = (valueStr) => {
    if (valueStr[(valueStr.length) - 1] === '.') {
        valueEl.textContent += '.';
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr) {
        valueEl,
        textContent =parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    } else {
        valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
    }
};


const handleNumberClick = (numStr) => {
    const currentValueStr = getValueAsStr()
    if (currentValueStr === "0") {
        setStrAsValue(numStr);
    } else {
        setStrAsValue(currentValueStr + numStr)
    }
};

const handleOperatorClick=(operation)=>{

};


//Add EventListener to Functions
acEl.addEventListener('click', ()=>{
    setStrAsValue('0');
});

pmEl.addEventListener('click', ()=>{
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();

  if (currentValueStr === '-0') {
      setStrAsValue('0');
      return;
  }
  if (currentValueNum >= 0){
      setStrAsValue('-'+currentValueStr);
  } else{
      setStrAsValue(currentValueStr.substring(1));
  }
});

percentEl.addEventListener('click', () =>{
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum/100;
    setStrAsValue(newValueNum.toString());
    console.log(setStrAsValue());
});


//Add EventListeners to Operators

additionEl.addEventListener('click', ()=>{
    handleOperatorClick('addition');
});

substractionEl.addEventListener('click', ()=>{
    
    handleOperatorClick('substraction');
});

multiplicationEl.addEventListener('click', ()=>{
    handleOperatorClick('multiplication');
});

divisionEl.addEventListener('click', ()=>{
    handleOperatorClick('division');
});

equalEl.addEventListener('click', () => {

});


//Add EventListener to numbers and decimal
for (let i = 0; i < numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {
        handleNumberClick(i.toString());
    });
}

decimalEl.addEventListener('click', () => {
    const currentValueStr = getValueAsStr();
    if (!currentValueStr.includes('.')) {
        setStrAsValue(currentValueStr + '.')
    }
});




//Set up the time
const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    hourEl.textContent = currentHour.toString();
    //String method padStart add 0, if the max length of the minute is not 2
    minutEl.textContent = currentMinute.toString().padStart(2, "0");
}
//Build in function in JS,first arg is callback function and second argument is the time you want to repeat the function
setInterval(updateTime(), 1000);
updateTime();