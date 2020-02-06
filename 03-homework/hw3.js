function getMaxDigit(num){
    let max=0;
    num = num.toString();
    for(let i = 0;i<num.length;i++) if(+(num[i])>max) max = +(num[i]);
    return max;
}

function getNumberGrade(num,grade){
    if(grade===0)return 1;
    else{
        let result =1;
        for(let i = 0;i<grade;i++) result *=num;
        return result;
    }
}

function fixName(name){
    let res="";
    for(let i = 0;i<name.length;i++)(i===0)?res+=name[i].toUpperCase():res+=name[i].toLowerCase();
    return res;
}

function calcTrueSalary(salary){
    const TAX = 19.5;
    const COEF = (100-TAX)/100;
    let result = salary*COEF;
    return result;
}

function getRandomNumber(n,m){
    let random = Math.floor(n+Math.random()*((m+1)-n))
    return random;
}

function countLetter(letter,word){
    let counter = 0;
    for(let i =0;i<word.length;i++) if(word[i].toLowerCase()===letter.toLowerCase()) counter++;
    return counter;
}

function convertCurrency(money){
    let cash;
    if(money[money.length-1]==="$"){
        cash=parseFloat(money)*25;
        return(cash+" грн");
    }else if(money.toLowerCase().search("uah")!==-1){
        cash=parseFloat(money)/25;
        return(cash+" $");
    }else return " Can not be converted!";
}

function getRandomPassword(size=8){
    let pass=``;
    for(let i =0;i<size;i++)pass+=(Math.floor(Math.random()*10)).toString();
    return +pass;
}
let randomPassword;
let userSize=prompt("Input size of password: ");
if(userSize===""||isNaN(+userSize)||(+userSize)%1!==0||(+userSize)<1){
    randomPassword = getRandomPassword();
    console.log(`You chose default-digits password`);
}else{
    userSize=+userSize;
    randomPassword=getRandomPassword(userSize);
    console.log(`You chose ${userSize}-digits password`);
}

function deleteLetters(text,letter){
    letter=letter.toLowerCase();
    text=text.toLowerCase();
    let updatedText=``;
    for(let i =0;i<text.length;i++)if(text[i]!==letter)updatedText+=text[i];
    return updatedText;
}

function isPalyndrom(testText){
    testText=testText.toLowerCase();
    let bool;
    let updatedText=``;
    for(let i =0;i<testText.length;i++)if(testText[i]!==" ")updatedText+=testText[i];
    for(let i = 0;i<updatedText.length/2;i++){
        if(updatedText[i]===updatedText[(updatedText.length-1)-i])bool=true;
        else{
            bool=false;
            break;
        }
    }
    return bool;
}

function deleteDuplicateLetters(text){
    text=text.toLowerCase();
    let counter=0;
    let update = ``;
    for(let i = 0;i<text.length;i++){
        for(let j = text.length-1;j>=0;j--){
            if(text[i]===text[j]){
                counter++;
            }
        }
        if(counter===1){
            update+=text[i];
            counter=0;
        }else counter=0;            
    }
    return update;
}

document.writeln(`Найбыльша цифра числа, вхідні дані(1943): ${getMaxDigit(1943)}<br>`);
document.writeln(`Піднесення числа в степінь, вхідні дані(25,2):${getNumberGrade(25,2)}<br> `);
document.writeln(`Виправлення імені, вхідні дані("oleXanDR"):${fixName("oleXanDR")}<br> `);
document.writeln(`Вичислення залишку зарплати після оплати податку, вхідні дані(1000):${calcTrueSalary(1000)}<br> `);
document.writeln(`Випадкове число від N до M, вхідні дані(13,25):${getRandomNumber(13,25)}<br> `);
document.writeln(`Кількість літери в слові, вхідні дані('a',"AstalavistA"):${countLetter('a',"AstalavistA")}<br> `);
document.writeln(`Конвертація грошових одиниць (з '$' в 'грн'), вхідні дані("10$"):${convertCurrency("10$")}<br> `);
document.writeln(`Конвертація грошових одиниць (з 'грн' в '$'), вхідні дані("2500UaH"):${convertCurrency("2500UaH")}<br> `);
document.writeln(`Конвертація грошових одиниць (з якоїсь іншої грошової валюти), вхідні дані("1234rub"):${convertCurrency("1234rub")}<br> `);
document.writeln(`Рандомний пароль: ${randomPassword}<br>`);
document.writeln(`Видалення букви з слова, вхідні дані("blablaabla Arteon","a"): ${deleteLetters("blablaabla Arteon","a")}<br> `);
document.writeln(`Перевірка на паліндром, вхідні дані("Аргентина манит негра"): ${isPalyndrom("Аргентина манит негра")}<br> `);
document.writeln(`Видалення букв, які зустрічаються більше, ніж 1 раз, вхідні дані("Бисквит был очень нежный"): ${deleteDuplicateLetters("Бисквит был очень нежный")}<br>`);
