'use strict'

const checkbox = document.querySelector('#chkAceito')

checkbox.addEventListener('change', function (e) {
    document.getElementById('btn').disabled = !checkbox.checked;
}, true)

const description = document.getElementById('txtDescricao')
const maxLength = description.maxLength
const container = document.getElementById('contador')
const spanInt = container.getElementsByTagName('span')[0]

showCharNumber(maxLength)

description.addEventListener('input', function (e) {

    let strLength = this.value.length
    let charRemain = (maxLength - strLength)

    showCharNumber(spanInt.textContent = charRemain.toString())

})

const title = document.querySelector('#txtTitulo')
const form = document.querySelector('.formCadastro')

form.addEventListener('submit', function (e) {
    if (!title.value) {
        alert("Título está vazio, por favor preencha")
        e.preventDefault()
        title.focus()
    } else {
        console.log('send')
    }
})

function showCharNumber(n) {
    spanInt.textContent = n
}
