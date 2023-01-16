let resultText = document.querySelector('.result'),
    v1 = document.querySelector('#n1'),
    v2 = document.querySelector('#n2')
    arrBtn = document.querySelector('input[type=button]')

console.log(arrBtn)

let sumAll = (v, m) => {
 switch (m) {
     case "+":
         return v+v;
         break;
    
    case "-":
        return v-v;
        break;

    case "*": 
        return v*v; 
        break;
    case "/":
        return v/v; 
        break;
 }
}

function soma(form1)
{
    a=new Number(form1.t1.value);
    b=new Number(form1.t2.value);
    c=new Number(a+b);
    resultText.innerHTML = String(c)
}
  
function sub(form1)
{
    a=new Number(form1.t1.value);
    b=new Number(form1.t2.value);
    c=new Number(a-b);
    resultText.innerHTML = String(c)

}

