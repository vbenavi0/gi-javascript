let num1;
let quest = document.getElementById('quest')
let string1 = "";
let string2 = "";
let string3 = "";
let nums = [];


function ac(){
    if(document.getElementById("clear").innerHTML === "BC"){
        document.getElementById("quest").innerHTML = "0";
        string1 = "";
        string2 = "";
        string3 = "";
        document.getElementById("clear").innerHTML = "AC"
    }
    else{
        string1 = "";
        string2 = "";
        document.getElementById("quest").innerHTML = "0";
        document.getElementById("up").innerHTML = "";
    }
}

function addLeftP(){
    string1 += "(";
    string2 += "(";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }    
}

function addRightP(){
    string1 +=")";
    string2 +=")";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function addDec(){
    string1 += ".";
    string2 += ".";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add0(){
    string1 += "0";
    string2 += "0";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add1(){
    string1 += "1";
    string2 += "1";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add2(){
    string1 += "2";
    string2 += "2";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add3(){
    string1 += "3";
    string2 += "3";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add4(){
    string1 += "4";
    string2 += "4";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add5(){
    string1 += "5";
    string2 += "5";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add6(){
    string1 += "6";
    string2 += "6";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add7(){
    string1 += "7";
    string2 += "7";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add8(){
    string1 += "8";
    string2 += "8";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function add9(){
    string1 += "9";
    string2 += "9";
    document.getElementById("quest").innerHTML = string1;
    if(document.getElementById("quest").innerHTML != "0"){
        document.getElementById("clear").innerHTML = "BC"
    }   
}

function multiply(num1, num2){
    return num1 * num2;
}

function mult(){
    string1 += "×";
    document.getElementById("quest").innerHTML = string1;
    nums.push(string2);
    nums.push("*");
    string2 = "";
}

function div(){
    string1 += "÷";
    document.getElementById("quest").innerHTML = string1;
    nums.push(string2);
    nums.push("/");
    string2 = "";
}

function sub(){
    string1 += "-";
    document.getElementById("quest").innerHTML = string1;
    nums.push(string2);
    nums.push("-");
    string2 = "";
}

function add(){
    string1 += "+";
    document.getElementById("quest").innerHTML = string1;
    nums.push(string2);
    nums.push("+");
    string2 = "";
}

function equ(){
    nums.push(string2);
    for(let i = 0; i<nums.length; i++){
        string3 += nums[i];
    }
    string1 = "";
    string2 = "";
    nums = [];
    console.log(string3);
    document.getElementById("up").innerHTML = string3 + " = "+ eval(string3);
    document.getElementById("quest").innerHTML = eval(string3);
    string3="";
    console.log(string1);
    for(let i = 0; i<nums.length; i++){
        console.log(nums[i]);
    }
}