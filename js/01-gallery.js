import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElement = document.querySelector(".gallery");

const createImg = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join(" ");

galleryElement.insertAdjacentHTML("afterbegin", createImg);

const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  if(event.target.tagName !== "IMG"){
    return;
  }
 
  const url = event.target.dataset.source;

  const modal = basicLightbox
    .create(
      `
		<img  src="${url}">
	`
    )
    .show();
}
