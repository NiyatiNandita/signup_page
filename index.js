var phoneno = document.getElementById("input-no");
var error = document.getElementById("error");
var otppage = document.getElementById("success");
var formpage = document.getElementById("page");

function isubmit() {
  //   var pattern = /^[/w]{10}$/;
  let input = document.getElementById("input-no").value;
  var pattern = /^[\d]{10}$/g;
  var valid = pattern.test(input);
  // console.log(valid);
  if (valid) {
    // error.style.display = "none";
    no.innerHTML = input;
    otppage.style.display = "block";
    formpage.style.display = "none";
  } else {
    error.style.display = "block";
  }
}
