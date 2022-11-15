{/* <div class="vezife-item">
<li class="vezife-tanitim">Idmana get</li>
<button class="vezife-btn vezife-btn-tamamlandi" ><i class="fa fa-check" aria-hidden="true"></i></button>
<button class="vezife-btn vezife-btn-sil"><i class="fa fa-trash" aria-hidden="true"></i></button>
</div> */}

// const let var
// camelCase

// const telebeler =["Aytac", "Gunay" , "Aynur"]
// console.log (telebeler.length)
// console.log (telebeler[telebeler.length- 1])

const yeniTapsiriqQutusu = document.getElementsByClassName('form-item')[0]
// console.log(yeniTapsiriqQutusu)

const yeniTodoElaveEtBtn = document.querySelector('.btn-vezife-elaveet')
// console.log(yeniTodoElaveEtBtn)



const todoList = document.querySelector('.vezife-siyahisi')
yeniTodoElaveEtBtn.addEventListener('click' , TodonuElaveEt)


function TodonuElaveEt(e) {
    e.preventDefault()


    /* <div class="vezife-item">
<li class="vezife-tanitim">Idmana get</li>
<button class="vezife-btn vezife-btn-tamamlandi" ><i class="fa fa-check" aria-hidden="true"></i></button>
<button class="vezife-btn vezife-btn-sil"><i class="fa fa-trash" aria-hidden="true"></i></button>
</div> */


const todoDivi = document.createElement('div')
todoDivi.classList.add("vezife-item")

const todoLi = document.createElement('li')
todoLi.classList.add('vezife-tanitim')
// <hi>Lorem ipsum </h1>
// innerText textContent innerHTML

todoLi.innerText = yeniTapsiriqQutusu.value

todoDivi.appendChild(todoLi)

const editBtn = document.createElement('button')
// <button> </button>
editBtn.classList.add('vezife-btn')
editBtn.classList.add('vezife-btn-tamamlandi')

editBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
todoDivi.appendChild(editBtn)

const silBtn = document.createElement('button')
silBtn.className = "vezife-btn vezife-btn-sil"
silBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
todoDivi.appendChild(silBtn)

todoList.appendChild(todoDivi)


}
    


