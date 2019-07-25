//just in case it doesnt exist
var codepion = window.codepion||{};
codepion.registrationPage={
	//Constants
	FORM_ID:'#signupform',
	OUTPUT_ID:'#output',
	//initialization method
	init: function(){
		//get the form and the output elements
		this.form=$(this.FORM_ID);
		this.output=$(this.OUTPUT_ID);
		//prevent normal from submission
		addEventListener(this.form, 'submit', this.handleSubmit);
	},
	//form handling
	handleSubmit:function (e) {
		e.preventDefault();
		var datatopost = this.form.serializeArray();
		// send form data to server
		this.sendRegistration(datatopost);
	},
	sendRegistration:function (datatopost) {
		$.ajax({
			url:"index.html",
			type:"POST",
			success:function(response) {
				this.displayResult(response);
			},
			error:function () {
				window.alert("There was an error with the Ajax call. Please try again later.")
			}
		});
	},
	displayResult:function (response) {
		this.output.html(response);
	}
};

// invoke the init after page loads
codepion.registrationPage.init();