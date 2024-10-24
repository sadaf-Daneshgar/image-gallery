const imageElems = document.querySelectorAll('.image-container');
const imageNameElems = document.querySelectorAll('.image-name');
const preBtn = document.querySelector('#pre');
const nextBtn = document.querySelector('#next');

imageElems.forEach((imageElem, index) => {
  imageElem.addEventListener('mouseover', () => {
    imageNameElems[index].style.display = 'flex';
  });

  imageElem.addEventListener('mouseout', () => {
    imageNameElems[index].style.display = 'none';
  });
});

let currentPage = 1;
const imagesPerPage = 8;

function displayImages() {
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  imageElems.forEach((imageElem, index) => {
    if (index >= startIndex && index < endIndex) {
      imageElem.style.display = 'block';
    } else {
      imageElem.style.display = 'none';
    }
  });
}

displayImages();

preBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    displayImages();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(imageElems.length / imagesPerPage)) {
    currentPage += 1;
    displayImages();
  }
});
