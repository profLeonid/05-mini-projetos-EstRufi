"use strict"

const calcularImc = (peso, altura) => Number(peso) / Number((altura * altura))

function limparDados(){
    document.getElementById("resultado")
        .classList.remove("abaixoPeso", "pesoNormal","sobrePeso","obesidadeI", "obesidadeII", "obesidadeIII")
}

function situacaoUsuario(imcfinal){
    if(imcfinal < 18.5)
        return "baixoPeso"
    else if(imcfinal <= 25)
        return "pesoNormal"
    else if (imcfinal <= 30)
        return "sobrePeso"
    else if (imcfinal <= 35)
        return "obesidadeI"
    else if (imcfinal <= 40)
        return "obesidadeII"
    else
        return "obesidadeIII"
}

function telaUsuario(imcfinal){
    if(imcfinal < 18.5)
        return "baixo Peso"
    else if(imcfinal <= 25)
        return "no peso ideal"
    else if (imcfinal <= 30)
        return "acima do peso"
    else if (imcfinal <= 35)
        return "com obesidade I"
    else if (imcfinal <= 40)
        return "com obesidade II"
    else
        return "com obesidade III"
}

function handleClick(){
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value 
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    const imcfinal = calcularImc(peso,altura)
    const escrito = telaUsuario(imcfinal)
    const cor = situacaoUsuario(imcfinal)

    resultado.textContent = `${nome} você está ${escrito}`
    limparDados()
    resultado.classList.add(cor)
    
}
