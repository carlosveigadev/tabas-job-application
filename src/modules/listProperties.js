import fetchProperty from './apiRequests/fetchProperty';

const listProperties = (properties) => {
  const propertiesObject = properties.data.objects;

  for (let i = 0; i < propertiesObject.length; i++) {

    fetchProperty(propertiesObject[i].id).then(property => createCarrousel(property));

    
  }
//   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
};

const createCarrousel = (item) => {
  const main = document.getElementById('show-properties');

  const propertyName = item.data.property.name;
  const photos = item.data.property_photos;
  const photosLength = item.data.property_photos.length;
  const photoCover = item.data.cover_photo;


  console.log(item)

  const carrouselControls = document.createElement('div');
  carrouselControls.id('carouselControls');
  carrouselControls.className = 'carousel slide';

  const carrouselInner = document.createElement('div');
  carrouselInner.className = 'carousel-inner';

  for (let i = 0; i < photosLength; i++) {
    const carrouselItem = document.createElement('div');
    carrouselItem.className = 'carousel-item';

    const img = document.createElement('img');

    if (i === 0) {
      img.srcset = photoCover.path_url;
    } else {
      img.srcset = photos[i].path_url;
    }

    carrouselItem.append(img);
    
    carrouselInner.append(carrouselItem);
  }

}



export default listProperties;