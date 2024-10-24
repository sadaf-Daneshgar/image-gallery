const imageElems = document.querySelectorAll(".image-container");
const imageNameElems = document.querySelectorAll(".image-name");
const preBtn = document.querySelector("#pre");
const nextBtn = document.querySelector("#next");

imageElems.forEach((imageElem, index) => {
  imageElem.addEventListener("mouseover", () => {
    imageNameElems[index].style.display = "flex";
  });

  imageElem.addEventListener("mouseout", () => {
    imageNameElems[index].style.display = "none";
  });
});

let currentPage = 1;
let imagesPerPage = 8; // Set to 6 images per page

preBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayImages();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(imageElems.length / imagesPerPage)) {
    currentPage++;
    displayImages();
  }
});

// Function to display images based on the current page
function displayImages() {
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  imageElems.forEach((imageElem, index) => {
    if (index >= startIndex && index < endIndex) {
      imageElem.style.display = "block";
    } else {
      imageElem.style.display = "none";
    }
  });
}

// Initial call to display images on the first page
displayImages();
