window.onload= function() {

	// console.log(subTotal);
	// subTotal.value;//this is where we pull the value from the HTML document

	var getRadioButtons = document.getElementsByName("percent");//grabs the values from each radio button

		for (var i = 0; i < getRadioButtons.length; i++) {
			getRadioButtons[i].addEventListener("change", calculate);
		};
		function calculate() {
			var subTotal = document.getElementsByName("subtotal")[0].value;
			// console.log(subTotal);
			// console.log(parseFloat(subTotal));
			// console.log(subTotal * this.value);

			var total = document.createElement("p");
			total.innerHTML = (subTotal * this.value).toFixed(2);
			document.body.appendChild(total);
		}

}