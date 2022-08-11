const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');
	formBox.classList.add('error');
	errorMsg.textContent = msg;
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	})
}

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
}

const chechLength = (input, min) => {
    if(input.value.length < min) {
        const text = input.previousElementSibling.innerText;
        const editedText = text.slice(0, -1);
        showError(input, `${editedText} składa się z min. ${min} znaków`)
    }
}

const checkPassword = (pass1, pass2) => {
    if(pass1.value !== pass2.value) {
        showError(pass2, 'Hasła do siebie nie pasują.')
    }
}

const checkEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}

const checkErrors = () => {
	const allInput = document.querySelectorAll('.form-box');
	let errorCoubt = 0;

	allInput.forEach(el => {
		if(el.classList.contains('error')) {
			errorCoubt ++;
		}
	})

	if(errorCoubt === 0) {
		popup.classList.add('show-popup')
	}
	console.log(errorCoubt)
}

sendBtn.addEventListener('click', e => {
	e.preventDefault();
	checkForm([username, pass, pass2, email]);
    chechLength(username, 3);
    chechLength(pass, 8);
    checkPassword(pass, pass2);
	checkEmail(email)
	checkErrors();
})

clearBtn.addEventListener('click', e => {
	e.preventDefault();
    [username, pass, pass2, email].forEach(el => {
		el.value = '';
        clearError(el)
	})
})
