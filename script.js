let num1;
let string0 = ""
let string1 = "0";
let string2 = "0";
let string3 = "";
let string4 = "";
let nums = [];


function ac(){
    if(document.getElementById("clear").innerHTML === "BC"){
        document.getElementById("quest").innerHTML = string4;
        string0 = string4;
        string1 = string4;
        string2 = "";
        string3 = "";
        nums = [];
        nums.push(string4);
        document.getElementById("clear").innerHTML = "AC"
        console.log('Clear');
    }
    else{
        string0 = "";
        string1 = "0";
        string2 = "0";
        string3 = "";
        string4 = "";
        document.getElementById("quest").innerHTML = "0";
        document.getElementById("up").innerHTML = "";
        nums = [];
        console.log('Clear All');
    }
}

function addVal(val){
    if(string1 === string4){
        string0 = val;
        string1 = val;
        string2 = val;
        string3 = "";
        nums = [];
        document.getElementById("clear").innerHTML = "BC";
        console.log("Reset");
    }
    else if((document.getElementById("quest").innerHTML === "0" && val != '0')){
        document.getElementById("clear").innerHTML = "BC";
        string0 = val;
        string1 = val;
        string2 = val;
    }
    else if(document.getElementById("quest").innerHTML != "0" && val != '0'){
        document.getElementById("clear").innerHTML = "BC";
        string0 += val;
        string1 += val;
        string2 += val;
    }
    else if(document.getElementById("quest").innerHTML === "0" && val === '0'){
        document.getElementById("clear").innerHTML = "BC";
    }
    else{
        string0 += val;
        string1 += val;
        string2 += val;
    }
    document.getElementById("quest").innerHTML = string1;
}

function operation(op){
    nums.push(string2);
    if(op === "×"){
        nums.push("*");
        string0 += "×";
        string1 += "×";
    }
    else if(op === "÷"){
        nums.push("/");
        string0 += "÷";
        string1 += "÷";
    }
    else if(op === "+"){
        nums.push("+");
        string0 += "+";
        string1 += "+";
    }
    else if(op === "-"){
        nums.push("-");
        string0 += "-";
        string1 += "-";
    }
    document.getElementById("quest").innerHTML = string1;
    string2 = "";
    document.getElementById("clear").innerHTML = "BC"
}

function percent(){
    string0 += '%'
    string1 += '%'
    string2 += "*"+String(eval(nums[0]*.01));
    document.getElementById("quest").innerHTML = string1;
}

function equ(){
    if(string1!=string4){
        nums.push(string2);
        for(let i = 0; i<nums.length; i++){
            string3 += nums[i];
        }
        string2 = "";
        nums = [];
        console.log(string0);
        console.log(string3);
        string4 = (eval(string3));
        document.getElementById("up").innerHTML = string0 + " = "+ string4;
        document.getElementById("quest").innerHTML = string4;
        nums.push(string4);
        string3="";
        string1 = string4;
        string0 = string4;
        // console.log(string1);
        for(let i = 0; i<nums.length; i++){
            console.log(nums[i]);
        }
        document.getElementById("clear").innerHTML = "AC"
    }
    else{
        document.getElementById("up").innerHTML = string4;
        document.getElementById("quest").innerHTML = string4;
    }
}