document.addEventListener("DOMContentLoaded", function () {
  var nicNumber = document.getElementById("nic-number-input");
  var confirmNicNumber = document.getElementById("confirm-nic-number-input");
  var nicLabel = document.getElementById("nic-number-label");
  var confirmNicLabel = document.getElementById("confirm-nic-number-label");
  var nicType = document.getElementById("nicType");

  // Disable the inputs initially
  nicNumber.disabled = true;
  nicLabel.style.backgroundColor = "transparent";

  confirmNicNumber.disabled = true;
  confirmNicLabel.style.backgroundColor = "transparent";

  // Listen for changes in the dropdown
  nicType.addEventListener("change", function () {
    var selectedValue = this.value;

    // Enable/disable inputs based on selected value
    if (selectedValue !== "") {
      nicNumber.disabled = false;
      confirmNicNumber.disabled = false;
    } else {
      nicNumber.disabled = true;
      confirmNicNumber.disabled = true;
    }
    if (nicNumber.disabled === true || confirmNicNumber.disabled === true) {
      nicLabel.style.backgroundColor = "transparent";
      confirmNicLabel.style.backgroundColor = "transparent";
    } else {
      nicLabel.style.backgroundColor = "#fff";
      confirmNicLabel.style.backgroundColor = "#fff";
    }

    // Change labels based on selected value
    nicLabel.textContent = labels[selectedValue] || "NIC Number";
    confirmNicLabel.textContent = confirmLabels[selectedValue] || "Confirm NIC Number";
  });

  var labels = {
    cnic: "CNIC ",
    poc: "POC",
    nicop: "NICOP ",
  };
  var confirmLabels = {
    cnic: "Confirm CNIC ",
    poc: "Confirm POC",
    nicop: "Confirm NICOP ",
  };
});
