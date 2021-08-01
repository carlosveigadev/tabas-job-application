import getPropertiesData from './modules/apiRequests/getPropertiesData';
import listProperties from './modules/listProperties';
import createNavbar from "./modules/createNavbar";

(function start() {
  const propertyApp = {
    init() {
      createNavbar();
      getPropertiesData().then(object => listProperties(object));
    }
  };

  propertyApp.init();
}());
