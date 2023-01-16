let arrBtn = document.querySelectorAll('input[type=button]'),


sumAll = (v, v2, m) => {
 switch (m) {
     case "+":
         return v+v2;
         break;
    
    case "-":
        return v-v2;
        break;

    case "*": 
        return v*v2; 
        break;
    case "/":
        return v/v2; 
        break;
 }
},

writeResult = (where,result) => {
    where.innerHTML = String(result)
}

arrBtn.forEach(input => {
    input.addEventListener('click', () => {
        let resultText = document.querySelector('.result'),
        v1 = Number(document.querySelector('#t1').value),
        v2 = Number(document.querySelector('#t2').value);
        writeResult(resultText, sumAll(v1, v2, input.value))
    })
});

