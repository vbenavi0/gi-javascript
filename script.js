let string0 = ""
let string1 = "0"; //Display String
let string2 = "0"; //String for adding to array
let string3 = ""; //String to be evaluated
let string4 = ""; //Solution String
let nums = []; //Array for building equation

function ac(){ //Clear Function
    if(document.getElementById("clear").innerHTML === "C"){ //Soft Clear if button is displayed "C"
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
    else{ //Clear All if button is displayed "AC"
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
    if(document.getElementById("quest").value === 'Error'){ //If error is on screen
        string0 = val;
        string1 = val;
        string2 = val;
        string3 = "";
        nums = [];
        document.getElementById("clear").innerHTML = "C";
        console.log("Reset");
    }
    else if(((document.getElementById("quest").value).startsWith('-'))){ //If input starts with neg number
        document.getElementById("clear").innerHTML = "C";
        string0 += val;
        string1 += val;
        string2 += val;
    }
    else if((document.getElementById("quest").value === "" && val != '0')){ //Initial Input
        document.getElementById("clear").innerHTML = "C";
        string0 = val;
        string1 = val;
        string2 = val;
        console.log('initial');
    }
    else if(document.getElementById("quest").value != string1){ //Text & Button Input
        document.getElementById("clear").innerHTML = "C";
        string0 = document.getElementById("quest").value
        string2 = document.getElementById("quest").value
        nums = [];
        nums.push(string2);
        console.log('text and button');
    }
    else if(string1 === string4){ //If Input when solution is already displayed
        string0 = val;
        string1 = val;
        string2 = val;
        string3 = "";
        nums = [];
        document.getElementById("clear").innerHTML = "C";
        console.log("Reset");
    }
    else if(document.getElementById("quest").value != "0" && val != '0'){ //Input for adding numbers to equation
        document.getElementById("clear").innerHTML = "C";
        string0 += val;
        string1 += val;
        string2 += val;
        console.log('additional input');
    }
    else if(document.getElementById("quest").value === "0" && val === '0'){ //Input for 0 on 0
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
    nums = [];
    if(document.getElementById("quest").value === ''){
        document.getElementById("quest").value = '0';
    }
    nums.push(document.getElementById("quest").value);
    string1 = document.getElementById("quest").value;

    if(op === "×"){ //Multiplication
        nums.push("*");
        string0 += "*";
        string1 += "*";
    }
    else if(op === "÷"){ //Division
        nums.push("/");
        string0 += "/";
        string1 += "/";
    }
    else if(op === "+"){ //Addition
        nums.push("+");
        string0 += "+";
        string1 += "+";
    }
    else if(op === "-"){ //Subtraction
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
    string1 = document.getElementById("quest").value;
}

function equ(){ //Function for solving problem on screen
    if((document.getElementById("quest").value+" ").includes('/0 ')){ //Divide by 0 handling
        document.getElementById("quest").value = 'Error'; //Display Error
    }
    else if((document.getElementById("quest").value).endsWith('-')||(document.getElementById("quest").value).endsWith('+')||(document.getElementById("quest").value).endsWith('*')||(document.getElementById("quest").value).endsWith('/')){ //Divide by 0 handling
        document.getElementById("quest").value = 'Error'; //Display Error
    }
    else if(document.getElementById("quest").value===""){ //If no initial input
        string4 = '0'
        document.getElementById("up").innerHTML = string4;
        document.getElementById("quest").value = string4;
        console.log("No Input");
    }
    else if(string1 != document.getElementById("quest").value){ //Solve for text input using array
        nums = [];
        string0 = document.getElementById("quest").value;
        string2 = document.getElementById("quest").value;
        nums.push(string2);
        for(let i = 0; i<nums.length; i++){
            string3 += nums[i];
        }
        console.log("text input");
        string4 = (eval(string3)); //Solve for equation string
        document.getElementById("up").innerHTML = string0 + " = "+ string4; //Format & display equation string & solution
        document.getElementById("quest").value = string4; //Display solution
        nums.push(string4); //Saves solution
        string3="";
        string1 = string4;
        string0 = string4;
        for(let i = 0; i<nums.length; i++){
            console.log(nums[i]);
        }
        document.getElementById("clear").innerHTML = "AC"
    }
    else if(string1!=string4){ //Solve for button input using array
        nums = [];
        string0 = document.getElementById("quest").value;
        string2 = document.getElementById("quest").value;
        nums.push(string2);
        for(let i = 0; i<nums.length; i++){
            string3 += nums[i];
        }
        console.log("button input");
        string4 = (eval(string3)); //Solve for equation string
        document.getElementById("up").innerHTML = string0 + " = "+ string4; //Format & display equation string & solution
        document.getElementById("quest").value = string4; //Display solution
        nums.push(string4); //Saves solution
        string3="";
        string1 = string4;
        string0 = string4;
        for(let i = 0; i<nums.length; i++){
            console.log(nums[i]);
        }
        document.getElementById("clear").innerHTML = "AC"
    }
    else{ //Output for no input
        document.getElementById("up").innerHTML = string4;
        document.getElementById("quest").value = string4;
        console.log("Nothing");
    }
}