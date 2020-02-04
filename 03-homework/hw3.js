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
console.log(userName);

function correctName(name){
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
let correctedName = correctName(userName);
console.log(correctedName);


