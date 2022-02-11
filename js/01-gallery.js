import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryItems(items){
    const markup = galleryItems.map(({})=>
    {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
    `    
    })
}
markup(galleryItems)
console.log(galleryItems);
console.log(markup[0])
