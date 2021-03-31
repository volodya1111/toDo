let input = document.querySelector('input')
let listToDo = document.querySelector('ul')
let addBtn = document.querySelector('button')

addBtn.addEventListener('click', addToDo)

input.addEventListener('keypress', function(event){
    if(event.keyCode == 13){
        addToDo()
    }
})

function addToDo(){
    let newLi = document.createElement('li')
    let firstDiv = document.createElement('div')
    let secondDiv = document.createElement('div')
    let paragraph = document.createElement('p')
    let toDo = document.createElement('p')

    if(input.value.length <= 3 || input.value >= 56){
        alert('Fail')
    }
    else{
        
        secondDiv.style.textTransform = 'capitalize'
    
    
        paragraph.innerHTML = 'Задачи'
        secondDiv.innerHTML = toDo
        secondDiv.innerHTML = input.value
    
        secondDiv.classList.add('toDoText')
        firstDiv.classList.add('toDoDetail')
        newLi.classList.add('item')
    
        secondDiv.appendChild(paragraph)
        firstDiv.appendChild(secondDiv)
        newLi.appendChild(firstDiv) 
        
        document.querySelector('ul').appendChild(newLi)
    
        input.value = '' 
    }
   
}

listToDo.addEventListener('click', function(event){
    console.log(event);
    if(event.target.tagName === 'DIV' && event.target.tagName != 'P'){
       event.target.parentElement.classList.toggle('complete')
       event.target.parentElement.classList.toggle('item')
    }
})

