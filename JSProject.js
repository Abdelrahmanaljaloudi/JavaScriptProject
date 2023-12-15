var resultElement = document.getElementById('result');
var btnAll = Array.from(document.querySelectorAll('.btn'));
console.log(typeof (btnAll))
for (var btn of btnAll) {

    btn.addEventListener("click", (e) => {

        var btnText = e.target.innerText;

        switch (btnText) {
            case 'C':
                // Clear the current expression
                resultElement.innerHTML = '0';
                break;
            case '=':
                // Evaluate the expression
                try {
                    var evaluatedResult = eval(resultElement.innerHTML).toString();
                    resultElement.innerHTML = evaluatedResult;

                } catch (error) {
                    resultElement.innerHTML = 'Error';
                }
                break;
            default:
                // Append the button text to the current expression
                if (resultElement.innerHTML === '0' || resultElement.innerHTML === 'Error') {
                    resultElement.innerHTML = btnText;
                } else {
                    resultElement.innerHTML += btnText;
                }
                break;
        }

    })

}


