//aula 1
//var nome = "Barbara Correia";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é muito lindo";
//alert(n1+n2);
//console.log(nome);
//console.log(n1+n2);
//console.log(frase.toUppercase());
//alert(frase.replace("Japão", "Brasil"));
//alert("Bem vinda " + nome);

//aula 2
/*
var lista = ["maca", "laranja", "banana"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.length);
//toString transforma em lista
//reverse muda a ordem
console.log(lista.toString());
//muda o separador de , para -
console.log(lista.join(" - "));

var fruta = {nome:"maca", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);

var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"verde"}]
console.log(frutas);
//alert(frutas[1].cor);*/

//aula 3
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
};

var count = 0;
while(count<5){
	console.log(count);
	count = count +1;
}

var d = new Date();
alert(d.getDay());
alert(d.getHours());
*/
/*
function soma(n1,n2){
	return n1 + n2;
}
//var x = prompt();
//var y = prompt();

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
}

alert(soma(2,5));
alert(setReplace("Vai Brasil", "Brasil", "Itália"));
*/

function clicou()
{
	document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
	//console.log(document.getElementById("agradecimento"));
	//alert("Obrigada por clicar");
}
function redirecionar(){
	//nova aba
	window.open("https://habitica.com");
	//mesma aba
	//window.location.href = "https://habitica.com";
}
function trocar(elemento){
	//esse fica retrito apenas pra um
	//document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse"
	elemento.innerHTML = "Obrigada por passar o mouse";
	//alert("Trocar texto");
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
	elemento.innerHTML = "Passe o mouse";
	//alert("Trocar texto");
}

function load(){
	alert("pagina carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value)
}