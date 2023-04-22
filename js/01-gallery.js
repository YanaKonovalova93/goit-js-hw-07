import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGalleryEl = document.querySelector(".gallery");

const body = document.querySelector("body");

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

function onOpenModal(e) {

  e.preventDefault();

    const selectedUrl = e.target.dataset.source;

    body.innerHTML = `<template>
  <div class="modal">
   <li class="gallery__item">
     <a class="gallery__link" href="${selectedUrl}">
      <img
        class="gallery__image"
        src="${selectedUrl}"
         data-source="${selectedUrl}"
        alt="q"
        width="800" height="600"
       />
    </a>
   </li>
  </div>
</template>`;
    
    const instance = basicLightbox.create(document.querySelector("template"));

    instance.show();

}


//   const instance = basicLightbox.create(
//     ` <img
//         class="gallery__image"
//         src="${selectedUrl}"
//          data-source="${selectedUrl}"
//         alt="w"
//         width="800" height="600"
//        />`, {
//            closable:false
//        }
//   );
    
//    const instance = basicLightbox
//      .create(
//        ` <img
//         src="${selectedUrl}"
//         width="800" height="600"
//        />`
//      )
//      .show();