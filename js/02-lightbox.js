import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const ulGalleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");

ulGalleryEl.insertAdjacentHTML("afterbegin", markup);

ulGalleryEl.addEventListener("click", onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
