//var nome = "heitor sanches";
//var idade = 20;
//var idade2 = 10;
//var frase = "dale dele dele doly"
//alert(nome + " tem " + idade + " anos de idade");
//alert(idade + idade2)
//console.log(frase.toUpperCase())
//console.log(frase.toLowerCase())
//console.log(frase.replace("dale", "xesque"))
//alert(frase.replace("dale", "xesque"))

//var lista = ["maçã", "pera", "laranja"]
//console.log(lista[1])
//alert(lista[2])
//lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString())
//console.log(lista.join(" - "))

//var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
//console.log(frutas)
//alert(frutas[1].cor)
/*
var idade = prompt("qual sua idade?")

if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade")
}
*/
/*
var count = 0;
while (count < 5) {
    console.log(count);
    count = count + 1

}
*/
/*
var count;

for (count = 0; count <= 5; count++) {
    alert(count)

};
*/
/*
var d = new Date();
alert(d.getDay())
alert(d.getHours())
alert(d.getSeconds())
*/
/*
function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5, 10))

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(setReplace("vai japão", "japão", "BRASIL"))

function validaidade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false
    }

}

var idade = prompt("qual sua idade");
console.log(validaidade(idade));
*/

function botao() {
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>"
        //console.log(document.getElementById("agradecimento"))
        //alert("obrigado por clicar");
}

function redirecionar() {
    window.open("https://github.com/eternalhades/work");
    //window.location.href = "https://github.com/eternalhades/work";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto")
    elemento.innerHTML = "obrigado por passar o mouse"
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui"
}

function load() {
    alert("pagina carregada")
}

function funcaochange(elemento) {
    console.log(elemento.value)
}