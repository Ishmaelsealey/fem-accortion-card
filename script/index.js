const buttons = document.querySelectorAll('.dropdownbutton')

buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		answer = button.nextElementSibling
		if (answer.style.display == 'block') {
			answer.style.display = 'none'
		} else {
			answer.style.display = 'block'
		}
	})
})