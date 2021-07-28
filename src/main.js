import getPropertiesData from './modules/apiRequests/getPropertiesData';
import listProperties from './modules/listProperties';

(function start() {
  const propertyApp = {
    init() {
      getPropertiesData().then(object => listProperties(object));
    }
  };

  propertyApp.init();
}());
