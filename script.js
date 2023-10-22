let string0 = ""
let string1 = "0"; //Display String
let string2 = "0"; //String for adding to array
let string3 = ""; //String to be evaluated
let string4 = ""; //Solution String
let nums = []; //Array for building equation


function ac(){ //Clear Function
    if(document.getElementById("clear").innerHTML === "C"){ //Soft Clear
        document.getElementById("quest").value = string4;
        string0 = string4;
        string1 = string4;
        string2 = "";
        string3 = "";
        nums = [];
        nums.push(string4);
        document.getElementById("quest").value = string4;
        document.getElementById("quest").placeholder = '0';
        document.getElementById("clear").innerHTML = "AC"
        console.log('Clear');
    }
    else{ //Clear All
        string0 = "";
        string1 = "0";
        string2 = "0";
        string3 = "";
        string4 = "";
        document.getElementById("quest").value = '';
        document.getElementById("quest").placeholder = '0';
        document.getElementById("up").innerHTML = "";
        nums = [];
        console.log('Clear All');
    }
}

function addVal(val){ //Function for putting numbers on screen using buttons
    if(string1 === string4){
        string0 = val;
        string1 = val;
        string2 = val;
        string3 = "";
        nums = [];
        document.getElementById("clear").innerHTML = "C";
        console.log("Reset");
    }
    else if(document.getElementById("quest").value === 'Error'){
        string0 = val;
        string1 = val;
        string2 = val;
        string3 = "";
        nums = [];
        document.getElementById("clear").innerHTML = "C";
        console.log("Reset");
    }
    else if((document.getElementById("quest").placeholder === "0" && val != '0')){
        document.getElementById("clear").innerHTML = "C";
        string0 = val;
        string1 = val;
        string2 = val;
    }
    else if(document.getElementById("quest").value != "0" && val != '0'){
        document.getElementById("clear").innerHTML = "C";
        string0 += val;
        string1 += val;
        string2 += val;
    }
    else if(document.getElementById("quest").value === "0" && val === '0'){
        document.getElementById("clear").innerHTML = "C";
        string0 += "0"
        nums = [];
    }
    else{
        string0 += val;
        string1 += val;
        string2 += val;
    }
    document.getElementById("quest").placeholder = "";
    document.getElementById("quest").value = string1;
}

function operation(op){ //Function for putting operators on screen using buttons
    nums.push(string2);
    if(op === "×"){
        nums.push("*");
        string0 += "*";
        string1 += "*";
    }
    else if(op === "÷"){
        nums.push("/");
        string0 += "/";
        string1 += "/";
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
    document.getElementById("quest").value = string1;
    string2 = "";
    document.getElementById("clear").innerHTML = "C"
}

function neg(){ //Function for putting negative numbers on screen using button
    if((document.getElementById("quest").value).startsWith('-')){
        document.getElementById("quest").value=document.getElementById("quest").value.slice(1);
    }
    else{
        document.getElementById("quest").value = "-" +document.getElementById("quest").value;
    }
}

function equ(){ //Function for solving problem on screen
    if((document.getElementById("quest").value+" ").includes('/0 ')){ //Divide by 0 handling
        document.getElementById("quest").value = 'Error';
    }
    else if(document.getElementById("quest").placeholder==="0"){
        string4 = '0'
        document.getElementById("up").innerHTML = string4;
        document.getElementById("quest").value = string4;
    }
    else if(string1 != document.getElementById("quest").value){ //Solve for text input
        nums = [];
        string0 = document.getElementById("quest").value;
        string2 = document.getElementById("quest").value;
        nums.push(string2);
        for(let i = 0; i<nums.length; i++){
            string3 += nums[i];
        }
        console.log("text input");
        string4 = (eval(string3));
        document.getElementById("up").innerHTML = string0 + " = "+ string4;
        document.getElementById("quest").value = string4;
        nums.push(string4);
        string3="";
        string1 = string4;
        string0 = string4;
        for(let i = 0; i<nums.length; i++){
            console.log(nums[i]);
        }
        document.getElementById("clear").innerHTML = "AC"
    }
    else if(string1!=string4){ //Solve for button input
        nums = [];
        string0 = document.getElementById("quest").value;
        string2 = document.getElementById("quest").value;
        nums.push(string2);
        for(let i = 0; i<nums.length; i++){
            string3 += nums[i];
        }
        console.log("button input");
        string4 = (eval(string3));
        document.getElementById("up").innerHTML = string0 + " = "+ string4;
        document.getElementById("quest").value = string4;
        nums.push(string4);
        string3="";
        string1 = string4;
        string0 = string4;
        for(let i = 0; i<nums.length; i++){
            console.log(nums[i]);
        }
        document.getElementById("clear").innerHTML = "AC"
    }
    else{
        document.getElementById("up").innerHTML = string4;
        document.getElementById("quest").value = string4;
    }
}