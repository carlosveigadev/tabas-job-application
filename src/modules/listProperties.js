import fetchProperty from './apiRequests/fetchProperty';

const listProperties = (properties) => {
  const propertiesObject = properties.data.objects;

  for (let i = 0; i < propertiesObject.length; i++) {
    fetchProperty(propertiesObject[i].id).then(property => createCarousel(property));
  }
};

const createCarousel = (item) => {
  const main = document.getElementById('show-properties');

  const propertyName = item.data.property.name;
  const propertyId = item.data.property.id;
  const photos = item.data.property_photos;
  const photosLength = item.data.property_photos.length;
  const photoCover = item.data.cover_photo;

  const carouselProperty = document.createElement('div');
  carouselProperty.setAttribute('data-bs-ride', 'carousel');
  carouselProperty.id = `carouselProperty${propertyId}`;
  carouselProperty.className = 'carousel slide col-4';

  const carouselIndicators = document.createElement('div');
  carouselIndicators.className = 'carousel-indicators';

  const carouselInner = document.createElement('div');
  carouselInner.className = 'carousel-inner';

  for (let i = 0; i < photosLength; i++) {
    
    const buttonIndicator = document.createElement('button');
    buttonIndicator.type = 'button';
    buttonIndicator.setAttribute('data-bs-target', `#carouselProperty${propertyId}`);
    if (i === 0) {
      buttonIndicator.className = 'active';
      buttonIndicator.setAttribute('aria-current', 'true');
    };
    
    buttonIndicator.setAttribute('data-bs-slide-to', i);
    buttonIndicator.setAttribute('aria-label', `Imagem ${i + 1}`);
    carouselIndicators.append(buttonIndicator);
    carouselProperty.append(carouselIndicators);

    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';

    const img = document.createElement('img');
    img.className = 'd-block w-100';

    if (i === 0) {
      // img.src = `./${photoCover.path_url}`;
      img.src = `https://www.gstatic.com/webp/gallery/1.jpg`;
      
      carouselItem.classList.add('active');
    } else {
      // img.src = `./${photos[i].path_url}`;
      img.src = `https://www.gstatic.com/webp/gallery/2.jpg`;
    }

    img.alt = `imagem de ${propertyName}`;

    carouselItem.append(img);
    carouselInner.append(carouselItem);
  }

  carouselProperty.append(carouselInner);


  const buttonPrev = document.createElement('button');
  buttonPrev.className = 'carousel-control-prev';
  buttonPrev.type = 'button';
  buttonPrev.setAttribute('data-bs-target', `#carouselProperty${propertyId}`);
  buttonPrev.setAttribute('data-bs-slide', 'prev');

  const spanPrev = document.createElement('span');
  spanPrev.className = 'carousel-control-prev-icon';
  spanPrev.setAttribute('aria-hidden', 'true');
  const spanHiddenPrev = document.createElement('span');
  spanHiddenPrev.className = 'visually-hidden';
  spanHiddenPrev.textContent = 'Previous';

  buttonPrev.append(spanPrev, spanHiddenPrev);
  carouselProperty.append(buttonPrev);

  const buttonNext = document.createElement('button');
  buttonNext.className = 'carousel-control-next';
  buttonNext.type = 'button';
  buttonNext.setAttribute('data-bs-target', `#carouselProperty${propertyId}`);
  buttonNext.setAttribute('data-bs-slide', 'next');

  const spanNext = document.createElement('span');
  spanNext.className = 'carousel-control-next-icon';
  spanNext.setAttribute('aria-hidden', 'true');
  const spanHiddenNext = document.createElement('span');
  spanHiddenNext.className = 'visually-hidden';
  spanHiddenNext.textContent = 'Next';

  buttonNext.append(spanNext, spanHiddenNext);
  carouselProperty.append(buttonNext);

  main.append(carouselProperty);
}



export default listProperties;