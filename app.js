/* eslint-disable no-unused-vars */
function OpenBar() {
  const closebtn = document.querySelector('.small-screen');
  closebtn.style.display = 'flex';
}

function CloseBar() {
  const closebtn = document.querySelector('.small-screen');
  closebtn.style.display = 'none';
}

function showPopUp(a) {
  const pop = document.getElementById('popUps');
  pop.style.display = 'flex';
  if (a === 'tonic') {
    console.log(a);
  } else {
    console.log(a);
  }
}
function closePopUp() {
  const pop = document.getElementById('popUps');
  pop.style.display = 'none';
}
