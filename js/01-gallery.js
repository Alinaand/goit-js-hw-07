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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `    
    }).join('');
};
// console.log(imageItems)

imageGallery.addEventListener('click',onImageClick)
function onImageClick(event){
  console.dir(event)
  event.preventDefault();
 if(event.target.nodeName !== 'IMG') {
   return;
 };
let src= event.target.dataset.source;

const modal = basicLightbox.create(`
        <img class="gallery__gallery__image" src=
        "${src}" width="800" height="600">  
        </img>  
`);

modal.show(src);
window.addEventListener('keypress',onEscKeyPress);
function onEscKeyPress(event){
  console.log(event)
  if(event.code === "escape")
  modal.close()
}


}

// console.log(instance)
// instance.show()

