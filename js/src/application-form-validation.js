function validateForm() {
    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => {
      errorMessage.textContent = '';
    });
  
    // Perform form validation
    let isValid = true;
  
    // Validate NIC Number
    const nicNumber = document.getElementById('input1').value;
    if (!nicNumber) {
      const errorMessage = document.querySelector('#input1 + .error-message');
      errorMessage.textContent = 'NIC Number is required';
      isValid = false;
    }
  
    // Add more validation rules for other fields as needed
  
    return isValid;
  }
  