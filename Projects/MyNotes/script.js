const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const delateBtns = document.getElementsByClassName('delate-note')
const delateAllBtn = document.querySelector('.delate-all')
const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue
let cardID = 0

const openPanel = () => {
	notePanel.style.display = 'flex'
}

const closePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textarea.value = ''
	category.selectedIndex = 0
}

const addNote = () => {
	if (category.options[category.selectedIndex].value !== '0' && textarea.value !== '') {
		createNote()
		closePanel()
		error.style.visibility = 'hidden'
	} else {
		error.style.visibility = 'visible'
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardID)
	newNote.innerHTML = `<div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class="fas fa-times icone"></i>
        </button>
        </div>
        <div class="note-body">${textarea.value}</div>`
	noteArea.appendChild(newNote)
	cardID++
    checkColor(newNote)
}

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text
}

const checkColor = note => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72, 255, 0)'
			break
		case 'Praca':
			note.style.backgroundColor = 'rgb(255, 243, 0)'
			break
		case 'Inne':
			note.style.backgroundColor = 'rgb(0, 170, 255)'
			break
	}
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete)
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)

