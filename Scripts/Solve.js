document.getElementById('fearBtn').addEventListener('click', function () {

    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let num3 = parseInt(document.getElementById('input3').value);
    let num4 = parseInt(document.getElementById('input4').value);
    let num5 = parseInt(document.getElementById('input5').value);
    let numK = parseInt(document.getElementById('kValue').value);

    let userInputs = new Array();
    userInputs.push(num1);
    userInputs.push(num2);
    userInputs.push(num3);
    userInputs.push(num4);
    userInputs.push(num5);
    let i = 0;
    for (i = 0; i < 4; i++) {
        let target = numK - userInputs[i];
        if (userInputs.includes(target, i + 1) == true) {
            document.getElementById('output').innerHTML = `${userInputs[i]} + ${target} = ${numK}`;
            i = 10;
        }
    }
    if (i == 4) {
        document.getElementById('output').innerHTML = `No 2 numbers add up to ${numK}`
    }
})