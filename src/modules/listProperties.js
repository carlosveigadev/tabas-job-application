import fetchProperty from './apiRequests/fetchProperty';
import createCarousel from './createCarousel';

const listProperties = (properties) => {
  const propertiesObject = properties.data.objects;

  for (let i = 0; i < propertiesObject.length; i++) {
    fetchProperty(propertiesObject[i].id).then(property => createCarousel(property));
  }
};

export default listProperties;