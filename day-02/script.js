//const active = document.querySelector('.active');
const smallImage = document.querySelectorAll('.sm-img');

smallImage.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('active');
  });
  item.addEventListener('mouseout', () => {
    item.classList.remove('active');
  })
});
