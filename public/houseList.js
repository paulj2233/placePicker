function showHouseList () {
	return `<ul>
	 			<li>1</li>
	 			<li>2</li>
	 			<li>3</li>
	 			<li></li>
	 			<li></li>
	 			<li></li>
	 		</ul>`
}

function doIt(){
$("#showList").html(showHouseList());
}

$(doIt());