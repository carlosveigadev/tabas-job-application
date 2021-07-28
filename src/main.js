import getPropertiesData from './modules/apiRequests/getPropertiesData';
import listProperties from './modules/listProperties';

(function start() {
  const propertyApp = {
    init() {
      // fetch data from api to populate the property list
      // const test = getPropertiesData();
      getPropertiesData().then(object => listProperties(object));
    },

  };

  propertyApp.init();
}());
