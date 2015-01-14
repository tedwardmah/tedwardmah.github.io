
function displayContactInfo(listItem, textType) {
	var newText = textType === 'display' ? $(listItem).data().displaytext : $(listItem).data().dummytext;
	console.log(newText);
	listItem.innerText = newText;
}


$(function(){
	console.log(':)')
	
	$('.contact-item').each(function(idx, listItem){
		displayContactInfo(listItem, 'dummy')
	})

	$('.contact-item').on('mouseover', function(){
		displayContactInfo(this, 'display')
	})

	$('.contact-item').on('mouseout', function(){
		displayContactInfo(this, 'dummy')
	})

})