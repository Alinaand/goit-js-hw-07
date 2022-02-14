import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGallery = document.querySelector('.gallery');
const imageItems = createGalleryItems(galleryItems);
imageGallery.insertAdjacentHTML('beforeend',imageItems);
console.log(imageGallery);
function createGalleryItems(items){
    return galleryItems.map(({preview,original,description})=>
    {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>
    `    
    }).join('');
};
imageGallery.addEventListener('click',onImageClick)
function onImageClick(event){
  e.preventDefault()
 if(!event.target.classlist.contains('gallery__item')) {
   return;
 };

}



