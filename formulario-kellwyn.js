const button = document.querySelector("#button")
const userInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const senhaInput = document.querySelector("#senha")
const confsenhaInput = document.querySelector("#confsenha")

button.addEventListener("click",function(e) {

    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    const confsenha = document.querySelector("#confsenha")

    const value = name.value
    const valor1 = email.value
    const valor2 = senha.value
    const valor3 = confsenha.value

alert("CADASTRADO COM SUCESSO")
document.getElementById('name').value=''
document.getElementById('email').value=''
document.getElementById('senha').value=''
document.getElementById('confsenha').value=''
    
})

userInput.addEventListener("keypress",function(e) {
    const name = document.querySelector("#name")
    const erro1 = document.querySelector("#erro1")
    const erro2 = document.querySelector("#erro2")

    if(!VerificaChar(e)) {
        name.classList.add("CaixaErro")
        name.classList.remove("CaixaOk")
        erro1.style.display = 'block'
    }
    else{
        name.classList.remove("CaixaErro")
        name.classList.add("CaixaOk")
        erro1.style.display = 'none'
    }
    if (name.value.length <= 1) {
        erro2.style.display = 'block'
        name.classList.add("CaixaErro")
        name.classList.remove("CaixaOk")
    }
    else {
        name.classList.remove("CaixaErro")
        name.classList.add("CaixaOk")
        erro2.style.display = 'none'
    }
    
})

emailInput.addEventListener("keypress",function(e) {
    const email = document.querySelector("#email")
    const erro3 = document.querySelector("#erro3")

    if(email.checkValidity(e)== true){
    erro3.style.display = 'block'
    email.classList.add("CaixaErro")
    email.classList.remove("CaixaOk")
    }
    else {
    erro3.style.display = 'none'
    email.classList.remove("CaixaErro")
    email.classList.add("CaixaOk")
    }
})

senhaInput.addEventListener("keypress",function(e) {
    const senha = document.querySelector("#senha")
    const erro4 = document.querySelector("#erro4")

    if(senha.value.length <7) {
        erro4.style.display = 'block'
        senha.classList.add("CaixaErro")
        senha.classList.remove("CaixaOk")
    }
    else{
        senha.classList.remove("CaixaErro")
        senha.classList.add("CaixaOk")
        erro4.style.display = 'none'
    }

})

confsenhaInput.addEventListener("keypress",function(e) {
    const confsenha = document.querySelector("#confsenha")
    const erro5 = document.querySelector("#erro5")
    
    if(confsenha.value != senha.value) {
        erro5.style.display = 'block'
        confsenha.classList.add("CaixaErro")
        confsenha.classList.remove("CaixaOk")
    }
    else{
        confsenha.classList.remove("CaixaErro")
        confsenha.classList.add("CaixaOk")
        erro5.style.display = 'none'
    }
})


function VerificaChar(e) {
    const char = String.fromCharCode(e.keyCode)

    console.log(e.keyCode)
    console.log(char)
    const pattern = '[a-zA-Z0-9]'

    if(char.match(pattern)) {
        return true
    }
}
