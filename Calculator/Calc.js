const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")

const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const period = document.getElementById("period")
const equals = document.getElementById("equals")
const clear = document.getElementById("clear")

const bottomDisplay = document.getElementById("bottomDisplay")
const topDisplay = document.getElementById("topDisplay")

const numberArr= [zero, one, two, three, four, five, six, seven, eight, nine];


// Functions 


const getBottomValueStr = () => {
    const bottomDisplayStr = bottomDisplay.textContent;
    return bottomDisplayStr.split(',').join('');
}

const getBottomValueNum = () => {
    return parseFloat(getBottomValueStr())
}

const setStrAsNum = (valueStr) => {
    bottomDisplay.textContent = parseFloat(valueStr).toLocaleString()
}

//functions



const numberClick = (numStr)=>{
const bottomDisplayStr = getBottomValueStr();
if(bottomDisplayStr==="0"){
    setStrAsNum(numStr)
}
else{
    setStrAsNum(bottomDisplayStr + numStr)
    bottomDisplay.textContent = parseFloat(bottomDisplayStr + numStr).toLocaleString(); 
}
};


const opperatorClick = (opperation) => {

}


//Event Listeners

for (let i=0;i<numberArr.length;i++){
    const number =numberArr[i];
    number.addEventListener('click',()=>{
        numberClick(i.toString());
    })
}

period.addEventListener('click', ()=>{
const bottomDisplayStr = getBottomValueStr();
if (!bottomDisplayStr.includes('.')){
    setStrAsNum(bottomDisplayStr + '.')
    bottomDisplay.textContent = bottomDisplayStr + '.'
}

})

clear.addEventListener("click",()=> {
    setStrAsNum('0');
})

divide.addEventListener("click",()=> {
    opperatorClick('divide')
})
plus.addEventListener("click",()=> {
    opperatorClick('plus')
})
multiply.addEventListener("click",()=> {
    opperatorClick('multiply')
})
minus.addEventListener("click",()=> {
    opperatorClick('minus')
})

//Event Listeners