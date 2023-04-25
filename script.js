const n1=document.querySelector('#numero1');
const n2=document.querySelector('#numero2');
const btn=document.querySelector('#calcular');
const res=document.querySelector('#result');
const form=document.querySelector('#formulario');
form.addEventListener('submit', btnSuma);

//action listener
function btnSuma(event){
	// console.log({event});
	event.preventDefault();
	let sum = Number(n1.value) + Number(n2.value);
	res.innerText='Resultado: '+sum;

}
