// Fetch the list of countries from the API
function fetchCountries() {
    clearDropdown('state');
    clearDropdown('city');
  
    fetch('http://192.168.150.74:8080/overseas_application_form/get-country-data')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        populateDropdown('country', data)
      });
  }
  
  // Fetch the list of states based on the selected country
  function fetchStates() {
    const selectedCountry = document.getElementById('country').value;
    const stateDropdown = document.getElementById('state');
    const cityDropdown = document.getElementById('city');
  
    clearDropdown('state');
    clearDropdown('city');
  
    if (selectedCountry === '') {
      stateDropdown.disabled = true;
      cityDropdown.disabled = true;
      return;
    }
  
    stateDropdown.disabled = false;
    cityDropdown.disabled = true;
  
    fetch(`http://192.168.150.74:8080/overseas_application_form/get-state-data?country_id=${selectedCountry}`)
      .then(response => response.json())
      .then(data => populateDropdown('state', data));
  }
  
  // Fetch the list of cities based on the selected state
  function fetchCities() {
    const selectedState = document.getElementById('state').value;
    const cityDropdown = document.getElementById('city');
  
    clearDropdown('city');
  
    if (selectedState === '') {
      cityDropdown.disabled = true;
      return;
    }
  
    cityDropdown.disabled = false;

  
    fetch(`http://192.168.150.74:8080/overseas_application_form/get-city-data?state_id=${selectedState}`)
      .then(response => response.json())
      .then(data => {
        console.log("city___________",data)
        populateDropdown('city', data)
      });
  }
  
  // Populate a dropdown select element with options
  function populateDropdown(elementId, data) {
    const dropdown = document.getElementById(elementId);
    dropdown.innerHTML = '<option value="">Select an option</option>';
  
    for (let item of data) {
      const option = document.createElement('option');
      option.value = item.pk;
      option.text = item.name;
      dropdown.appendChild(option);
    }
  }
  
  // Clear a dropdown select element
  function clearDropdown(elementId) {
    const dropdown = document.getElementById(elementId);
    dropdown.innerHTML = '<option value="">Select an option</option>';
    dropdown.disabled = true;
  }
  
  // Add event listeners to the country and state dropdowns
  document.getElementById('country').addEventListener('change', fetchStates);
  document.getElementById('state').addEventListener('change', fetchCities);
  
  // Fetch the list of countries when the page loads
  fetchCountries();
  