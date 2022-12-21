let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item =>{
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item =>{
      item.addEventListener('click', selectChoose)
  });

  function selectToggle () {
      this.parentElement.classList.toggle('select-active');
  }

  function selectChoose () {
      let text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('select-active');
  }
};

select();



let modul = function () {
  let curriculumHeader = document.querySelectorAll('.curriculum__header');

  curriculumHeader.forEach(item =>{
      item.addEventListener('click', selectToggle)
  });

  function selectToggle () {
      this.parentElement.classList.toggle('curriculum-active');
  }
};

modul();