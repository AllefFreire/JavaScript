const colors = {
	body: 'blue',
	div: 'gold',
	span: 'red',
	p: 'Brown',
	ul: 'CornflowerBlue',
	ol: '#20B2AA',
	li: '#3CB371',
	a: 'DarkGrey',
	section: 'DarkOrange',
	header: 'DarkOrchid',
	footer: 'DarkSlateGray',
	main: '#00BFFF',
	nav: '#B22222',
	form: '#48D1CC',
	padrao: '#616161',
	get(tag) {
		return this[tag] ? this[tag] : this.padrao
	}
}

document.querySelectorAll('.tag').forEach(box => {
	const tagName = box.tagName.toLowerCase()
	
	box.style.borderColor = colors.get(tagName)
	
	if(!box.classList.contains('nolabel')) {
		const label = document.createElement('label')
		label.style.background = colors.get(tagName)
		label.innerHTML = tagName
		box.insertBefore(label, box.childNodes[0])
	}
})