const biggerPic = document.querySelector('.big-pic')

function setBigPicture(e) {
	const img = e.src
	biggerPic.src = img
}