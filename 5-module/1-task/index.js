function hideSelf() {
  let buttonHidden = document.querySelector('.hide-self-button');

  function hidden () {
    buttonHidden.hidden = true;
  }
  buttonHidden.addEventListener('click', hidden);
}
