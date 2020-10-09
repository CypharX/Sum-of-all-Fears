//Wires event listener to call anonymous function when "fearBtn" is clicked.
document.getElementById('fearBtn').addEventListener('click', function () {
    //Creates a variable for each user input
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let num3 = parseInt(document.getElementById('input3').value);
    let num4 = parseInt(document.getElementById('input4').value);
    let num5 = parseInt(document.getElementById('input5').value);
    let numK = parseInt(document.getElementById('kValue').value);
    //Creates a new array "userInputs" to hold all user inputs. 
    let userInputs = new Array();
    userInputs.push(num1);
    userInputs.push(num2);
    userInputs.push(num3);
    userInputs.push(num4);
    userInputs.push(num5);
    //Creating "i" variable outside the loop so it can be used it later.
    let i = 0;
    //Starting loop to run 4 times, once for each position in the array 
    //except for that last position.
    for (i = 0; i < 4; i++) {
        //Setting a new "target" variable to look for in the "includes" function.
        let target = numK - userInputs[i];
        //"if" function calling a "includes" function on the "userInputs" array
        //that if returns true will output the success message and end the loop.
        if (userInputs.includes(target, i + 1) == true) {
            //Template literals are used to display variable values and icons in the output.
            document.getElementById('output').innerHTML = `<span class="h2 textstyle animate__animated animate__fadeInRightBig">${userInputs[i]} + ${target} = ${numK} <img src="Images/Checkmark.png" /></span>`;
            break;
        }
    }
    //"if" function to set an output if the loops ended without returning true.
    if (i == 4) {
        //Template literals are used to display variable values and icons in the output.
        document.getElementById('output').innerHTML = `<span class="h2 textstyle animate__animated animate__fadeInUpBig">No 2 numbers add up to ${numK} <img src= "Images/RedX.png" /></span>`
    }
})
//Function to listen for keypresses in "input1" and ignore all non-number characters
document.getElementById('input1').addEventListener('keypress', function (evt) {
    //Creates the "char" variable and sets it equal to the character code of the 
    //pressed input
    let char = evt.which;
    //Uses the value of "char" to determine the given character using its Ascii
    // code and returning true if it's a character we want and false if it's any
    //other character.
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
//Same as above function but for "input2"
document.getElementById('input2').addEventListener('keypress', function (evt) {
    let char = evt.which;
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
//Same as above functions but for "input3"
document.getElementById('input3').addEventListener('keypress', function (evt) {
    let char = evt.which;
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
//Same as above functions but for "input4"
document.getElementById('input4').addEventListener('keypress', function (evt) {
    let char = evt.which;
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
//Same as above functions but for "input5"
document.getElementById('input5').addEventListener('keypress', function (evt) {
    let char = evt.which;
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
//Same as above functions but for "kValue"
document.getElementById('kValue').addEventListener('keypress', function (evt) {
    let char = evt.which;
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});