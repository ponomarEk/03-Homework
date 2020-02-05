function getMaxDigit(num){
    let max=0;
    num = num.toString();
    for(let i = 0;i<num.length;i++) if(+(num[i])>max) max = +(num[i]);
    return max;
}

let userNumber1 = prompt("Input a number for first function: ");
let flag = true;
while(flag){
    if(isNaN(+(userNumber1))!==true && userNumber1!=="" && userNumber1%1==0){
        userNumber1 = +(userNumber1);
        flag = false;
    }
    else {
        alert("not correct number!");
        userNumber1 = prompt(`Input a number for first function: `);
    }
}
flag = true;
let maxDigit = getMaxDigit(userNumber1);
console.log(maxDigit);

function getNumberGrade(num,grade){
    if(grade===0)return 1;
    else{
        let result =1;
        for(let i = 0;i<grade;i++) result *=num;
        return result;
    }
}
let userNumber2 = prompt("Input a number for 2 function: ");
while(flag){
    if(isNaN(+(userNumber2))!==true && userNumber2!=="" ){
        userNumber2=+(userNumber2);
        flag = false;
    }
    else {
        alert("not correct number!");
        userNumber2 = prompt("Input a number for second function: ");
    }
}
flag = true;
let userGrade = prompt("Input a grade for second function (integer): ");
while(flag){
    if(isNaN(+(userGrade))!==true && userGrade!=="" && userGrade%1==0 && userGrade>=0 ){
        userGrade=+(userGrade);
        flag = false;
    }
    else {
        alert("not correct grade!");
        userGrade = prompt("Input a grade for second function (integer): ");
    }
}
flag = true;
let numberGrade = getNumberGrade(userNumber2,userGrade);
console.log(userNumber2);
console.log(userGrade);
console.log(numberGrade);

let temp = prompt(`Input name: `);
let userName = ``;
while(flag){
    if(temp!==''){
        for(let i = 0;i<temp.length;i++){
            if(temp[i]>= 'а' && temp[i] <= 'я' || temp[i] >= 'А' && temp[i] <= 'Я'||temp[i]>='a'&&temp[i]<='z'||temp[i]>='A'&&temp[i]<='Z'){
                userName+=temp[i];
                flag = false;
            }else{
                alert("Not a name!");
                userName = ``;
                temp = prompt(`Input name: `);
            }
        }
    }else{
        alert("Not a name!");
        temp = prompt(`Input name: `);
    }
}
flag = true;
console.log(userName);

function fixName(name){
    let res="";
    for(let i = 0;i<name.length;i++){
        if(i===0){
            res+=name[i].toUpperCase();
        }else{ 
            res+=name[i].toLowerCase();
        }
    }
    return res;
}
let fixedName = fixName(userName);
console.log(fixedName);

function calcTrueSalary(salary){
    const TAX = 19.5;
    let coef = (100-TAX)/100;
    let result = salary*coef;
    return result;
}
let userSalary = prompt("Input a salary: ");
while(flag){
    if(userSalary!==""&&isNaN(+(userSalary))!==true&&+(userSalary)>=0){
        userSalary=+(userSalary);
        flag = false;
    }else{
        alert("incorrect data!")
        userSalary = prompt("Input a salary: ");
    }
}
let trueSalary = calcTrueSalary(userSalary);
console.log(trueSalary);

function getRandomNumber(n,m){
    let random = Math.floor(n+Math.random()*((m+1)-n))
    return random;
}
let numberN = prompt("Input number N (integer): ");
let numberM = prompt("Input number M (integer): ");
flag = true;
while(flag){
    if(numberN!==""&&numberM!==""&&isNaN(+(numberN))!==true&&isNaN(+(numberM))!==true&&+(numberM)%1===0&&+(numberN)%1===0&&+(numberM)>+(numberN)){
        numberM=+(numberM);
        numberN=+(numberN);
        flag = false;
    }else{
        alert("incorrect data!");
        numberN = prompt("Input number N (integer): ");
        numberM = prompt("Input number M (integer): ");
    }
}
let randomNumber = getRandomNumber(numberN,numberM);
console.log(randomNumber);
flag = true;

function countLetter(letter,word){
    let counter = 0;
    for(let i =0;i<word.length;i++) if(word[i].toLowerCase()===letter.toLowerCase()) counter++;
    return counter;
}
temp = prompt(`Input word: `);
let userWord = ``;
while(flag){
    if(temp!==''){
        for(let i = 0;i<temp.length;i++){
            if(temp[i]>= 'а' && temp[i] <= 'я' || temp[i] >= 'А' && temp[i] <= 'Я'||temp[i]>='a'&&temp[i]<='z'||temp[i]>='A'&&temp[i]<='Z'){
                userWord+=temp[i];
                flag = false;
            }else{
                alert("Not a word!");
                userWord = ``;
                temp = prompt(`Input word: `);
            }
        }
    }else{
        alert("Not a word!");
        temp = prompt(`Input word: `);
    }
}
flag = true;
console.log(userWord);

temp = prompt(`Input letter: `);
let userLetter = ``;
while(flag){
    if(temp!==''&&temp.length<2){
        for(let i = 0;i<temp.length;i++){
            if(temp[i]>= 'а' && temp[i] <= 'я' || temp[i] >= 'А' && temp[i] <= 'Я'||temp[i]>='a'&&temp[i]<='z'||temp[i]>='A'&&temp[i]<='Z'){
                userLetter+=temp[i];
                flag = false;
            }else{
                alert("Not a letter!");
                userLetter = ``;
                temp = prompt(`Input letter: `);
            }
        }
    }else{
        alert("Not requisite length!");
        temp = prompt(`Input letter: `);
    }
}
flag = true;
console.log(userLetter);

let amount = countLetter(userLetter,userWord);
console.log(amount);

function convertCurrency(money){
    
}
