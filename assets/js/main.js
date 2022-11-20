
//inputs
let inputFeld = document.querySelector('#userinput')
let inputSubmit = document.querySelector('#enter')

//getOutput
let unOrdListe = document.querySelector('ul')

//function Submit
inputSubmit.addEventListener('click', () => {

    if (inputFeld.value) {
        let liste = document.createElement('li')
        listeText = document.createTextNode(inputFeld.value)
        liste.appendChild(listeText)
        unOrdListe.appendChild(liste)
    }
    else { false }
    inputFeld.value = ''

})