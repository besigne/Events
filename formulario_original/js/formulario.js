'use strict'

const checkbox = document.querySelector('#chkAceito')

checkbox.addEventListener('change', function () {
    document.getElementById('btn').disabled = !checkbox.checked;
}, true)

const description = document.getElementById('txtDescricao')
const maxLength = description.maxLength
const container = document.getElementById('contador')
const spanInt = container.getElementsByTagName('span')[0]

showCharNumber(maxLength)

description.addEventListener('input', function () {

    let strLength = this.value.length
    let charRemain = (maxLength - strLength)

    showCharNumber(spanInt.textContent = charRemain.toString())

})

const title = document.querySelector('#txtTitulo')
const form = document.querySelector('.formCadastro')

form.addEventListener('submit', function (e) {
    if (!title.value) {
        ShowErrorMessage("Título está vazio, por favor preencha", function () {
            // title.focus()
        })
        e.preventDefault()
        // title.focus()
    } else {
        console.log('send')
    }
})

function showCharNumber(n) {
    spanInt.textContent = n
}

const feedbackMessage = document.getElementById('feedbackMessage')
const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]

function ShowErrorMessage(msg, cb) {

    feedbackMessage.classList.add("show")
    feedbackMessage.getElementsByTagName("p")[0].textContent = msg

    feedbackMessageCloseBtn.focus()

    function hideErrorMessage() {

        feedbackMessage.classList.remove('show')

        feedbackMessageCloseBtn.removeEventListener('click', hideErrorMessage)
        feedbackMessageCloseBtn.removeEventListener('keyup', pressedKeyboardOnBtn)

        if (typeof cb === "function") {
            cb()
        }
        title.focus()
    }

    function pressedKeyboardOnBtn(e){
        if(e.keyCode === 27){
            hideErrorMessage()
            title.focus()
        }
    }

    feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage)
    feedbackMessageCloseBtn.addEventListener('keyup', pressedKeyboardOnBtn)
}


