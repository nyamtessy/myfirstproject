let button = document.getElementById('enter')
let input = document.getElementById('userInput')
let ul = document.querySelector('ul')

function inputLength(){
    return input.value.length
}

function createLiElement() {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ''
}

function addListAfterEnter() {
    // if(inputLength() === 0) {
    //     alert('Enter an item first')
    // }

    if(inputLength() > 0){
        createLiElement()
    }
} 

function addListAfterKeypress(e) {
    // if(inputLength === 0 && e.keyCode === 13) {
    //     alert('Enter an item first')
    // }

    if (inputLength() > 0 && e.keyCode === 13){
        createLiElement() 
    }
}

button.addEventListener('click', addListAfterEnter)

input.addEventListener('keypress', addListAfterKeypress)

// // creating bought element
// const bought = document.createElement('a')
// bought.id = "bought"
// bought.innerText = 'Bought'
// bought.href = "#"


// // creating remove element
// const remove = document.createElement('a')
// remove.id = "remove"
// remove.innerText = 'Remove'
// remove.href = "#"

// li.appendChild(bought)

// li.appendChild(remove)

// items.appendChild(li)


// function boughtItem(element){
//     // console.log('completed button clicked')

//     element.parentElement.firstChild.classList.add('boughtItem')
// }

// function removeItem(element){
//     // console.log('delete button clicked')
    
//     element.parentElement.remove()
// }

// items.addEventListener('click', (e) => {
//     e.preventDefault()
//     // console.log(e)

//     if (e.target.id === 'bought'){
//         // console.log('complete button clicked')
//         boughtItem(e.target)
//     }

//     if (e.target.id === 'remove'){
//         // console.log('Delete button clicked')
//         removeItem(e.target)
//     }
// })
