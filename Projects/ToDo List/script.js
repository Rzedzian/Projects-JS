let todoInput
let errorInfo
let addBtn
let ulList

let popup
let popupInfo
let todoEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
	preperDOMElements()
	preperDOMEvents()
}

const preperDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const preperDOMEvents = () => {
	addBtn.addEventListener('click', addNewTask)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
	todoInput.addEventListener('keyup', enterKeyCheck)
}

const addNewTask = () => {
	if (todoInput.value !== '') {
		const newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createToolPanel(newTodo)
		ulList.append(newTodo)
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createToolPanel = newTodo => {
	const newToolPanel = document.createElement('div')
	newToolPanel.classList.add('tools')
	newTodo.append(newToolPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	newToolPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
        deleteTodo(e)
	}
}

const editTodo = e => {
	todoEdit = e.target.closest('li')
	popupInput.value = todoEdit.firstChild.textContent
	popup.style.display = 'flex'
}

const closePopup = () => {
	popup.style.display = 'none'
	popupInfo.textContent = ''
}

const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Wpisz teść zadania'
	}
}

const deleteTodo = e => {
    e.target.closest('li').remove()

    const allTodos = ulList.querySelector('li')

    if (allTodos.length === 0) {
		errorInfo.textContent = 'Brak zadań na liście'
	}
}

const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		addNewTask()
	}
}

document.addEventListener('DOMContentLoaded', main)
