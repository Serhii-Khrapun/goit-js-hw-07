import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");

const createImg = galleryItems
  .map(({preview, original,description}) =>
    
      `<a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" 
    alt="${description}" />
</a>`
  )
  .join(" ");

galleryElement.insertAdjacentHTML("afterbegin", createImg);


const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener("click", onGalleryContainerClick);
function onGalleryContainerClick (event) {
    event.preventDefault();
 }
 const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250});