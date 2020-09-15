const todoList = []
const buttonSelectAllElement = document.getElementById('buttonSelectAllId')
const inputElement = document.getElementById('inputId')


buttonSelectAllElement.addEventListener('click', () => {
    
})

inputElement.addEventListener('keydown', event => {
    //console.log(event)
    if (event.key === 'Enter') {
        //console.dir(inputElement)
        todoList.push(inputElement.value)
        inputElement.value = '';
    }
        //onsole.log('был нажат enter')
})


 
//  <ul class="list-group list-group-flush" id='list'></ul>
const ulElement = document.getElementById('list')
          
    //  < li class="list-group-item" >
        
        
//      <input type="checkbox" class="form-check-input" id="exampleCheck1">
        const checkboxElement = document.getElementById('exampleCheck1')
        checkboxElement.ty
        
//      <label class="form-check-label" for="exampleCheck1">элемент</label>

//      <button type="button" class="btn btn-outline-success">Success</button>

//      <button type="button" class="btn btn-outline-danger">Danger</button>

//  </li>

//</ul> 

//  <ul class="list-group list-group-flush" id='list'></ul>
    const ulElement = document.getElementById('list')

//      <li class="list-group-item">
        const liElement = document.createElement('li')
        liElement.className = 'list-group-item'
        ulElement.append(liElement)  

//          <div class="from-group from-check">
            const divElement = document.createElement('div')
            divElement.className = 'from-group from-check'
            liElement.append(divElement)            

//              <input type="checkbox" class="form-check-input" id="exampleCheck1">
//              <label class="form-check-label" for="exampleCheck1">элемент</label>
//              <button type="button" class="btn btn-outline-success">Success</button>
//              <button type="button" class="btn btn-outline-danger">Danger</button>
//          </div>	
//      </li>
//  </ul>
