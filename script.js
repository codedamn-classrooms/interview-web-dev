function generateSelector(target) {
	return 'TODO: Implementation missing'
}

document.body.addEventListener('click', (e) => {
	let selector = document.querySelector('.selector')
	// selector output
	let output = generateSelector(e.target)

	selector.innerHTML = `${output}`

	// element that you select
	let element = document.querySelector(output)
	console.log('Selected Element:', element)
})
