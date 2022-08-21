// DOM elements
const swapBtn = document.querySelector('#swap-btn')
const container = document.querySelector('#container')
const icons = document.querySelector('#icons')

// get data stored in localStorage and set up app
let dark = JSON.parse(localStorage.getItem('animated-icons-darkmode')) || false
if (dark) {
	container.classList.add('dark')
	swapBtn.textContent = 'Light Mode'
	icons.style.setProperty('--rotation', 180)
}

// Event listener on button
swapBtn.addEventListener('click', () => {
	container.classList.toggle('dark')
	const rotation = parseInt(getComputedStyle(icons).getPropertyValue('--rotation'))
	icons.style.setProperty('--rotation', rotation - 180)
	dark = !dark
	if (dark) {
		swapBtn.textContent = 'Light Mode'
	} else {
		swapBtn.textContent = 'Dark Mode'
	}
	localStorage.setItem('animated-icons-darkmode', JSON.stringify(dark))
})