"use strict"

function calcularMedia(){
    const nota1 = document.getElementById("valor1")
    const nota2 = document.getElementById("valor2")
    const nota3 = document.getElementById("valor3")
    const resultado = document.getElementById("result")

    const media = (nota1 + nota2 + nota3) /3

    // não está mostrando o calculo
    resultado.textContent(`sua média é ${media}`)
}