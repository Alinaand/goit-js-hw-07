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
let modal;
function onImageClick(event){
  console.dir(event)
  event.preventDefault();
 if(event.target.nodeName !== 'IMG') {
   return;
 };
let src= event.target.dataset.source;

 modal = basicLightbox.create(`
        <img class="gallery__gallery__image" src=
        "${src}" width="800" height="600">  
        </img>  
`,
{onShow: (modal) => {addEventListenerEsc()},
onClose: (modal) => {removeEventListenerEsc()}
});
modal.show(src);

};
function onEscKeyPress(event){
  console.log(event.code)
  if(event.code === 'Escape'){
    modal.close();
  };
};
function addEventListenerEsc() {
  window.addEventListener('keydown',onEscKeyPress);
}

function removeEventListenerEsc(){
window.removeEventListener('keydown',onEscKeyPress)
}