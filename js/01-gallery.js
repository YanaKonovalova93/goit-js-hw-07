import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGalleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
         data-source="${original}"
        alt="${description}"
       />
    </a>
   </li>`
  )
  .join("");

ulGalleryEl.insertAdjacentHTML("afterbegin", markup);

ulGalleryEl.addEventListener("click", onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  const selectedUrl = evt.target.dataset.source;

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${selectedUrl}" width="800" height="600">
`);

  instance.show();

  ulGalleryEl.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
