let validate = () => {
	let fName = document.getElementById("Name");
	let nameErrorMsg = document.getElementById("nameErrorMsg");

	if(fName.value.length == 0){
		nameErrorMsg.classList = "text-danger";
		fName.classList = "form-control is-invalid";
	}
	else{
		nameErrorMsg.classList = "d-none text-danger";
		fName.classList = "form-control";
	}

	let fEmail = document.getElementById("email");
	let emailErrorMsg = document.getElementById("emailErrorMsg");

	if(fEmail.value.length == 0){
		emailErrorMsg.classList = "text-danger";
		fEmail.classList = "form-control is-invalid";
	}
	else{
		emailErrorMsg.classList = "d-none text-danger";
		fEmail.classList = "form-control";
	}

	let fSubject = document.getElementById("subject");
	let subjectErrorMsg = document.getElementById("subjectErrorMsg");

	if(fSubject.value.length == 0){
		subjectErrorMsg.classList = "text-danger";
		fSubject.classList = "form-control is-invalid";
	}
	else{
		subjectErrorMsg.classList = "d-none text-danger";
		fSubject.classList = "form-control";
	}

	let fMessage = document.getElementById("message");
	let messageErrorMsg = document.getElementById("messageErrorMsg");

	if(fMessage.value.length == 0){
		messageErrorMsg.classList = "text-danger";
		fMessage.classList = "form-control is-invalid";
	}
	else{
		messageErrorMsg.classList = "d-none text-danger";
		fMessage.classList = "form-control";
	}
};