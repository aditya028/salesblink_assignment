function clickFunction(event) {
  let number = document.getElementById("dis_num");
  if (number.innerHTML.length >= 14) {
    alert("Length of number should be less than 14");
    return;
  }
  number.innerHTML += event.path[0].id;
}
function clearFunction() {
  let number = document.getElementById("dis_num");
  number.innerHTML = number.innerText.slice(0, -1);
}

function callFunction() {
  let number = document.getElementById("dis_num");
  if (number.innerText.length === 10) alert("calling " + number.innerText);
  else alert("Invalid Number");
}
