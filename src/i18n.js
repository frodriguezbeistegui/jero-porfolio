import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  enUS: {
    translation: {
      'yachtSkipper': 'Yacht Skipper',
      'contact': 'Contact',
      'aboutMe': 'about me',
      'whoAmI': 'who am i?',
      'whoText': 'My Name is Jeronimo Fernandez Bados born and raised in Córdoba, Argentina. At 22 years old, I am a passionate sailor and lover of the sea. From an early age I dedicated myself to competing and teaching this passion.',
      'myExperience': 'My Experience',
      'experienceText': 'First contact was in windsurfing regatta, where I learned the basics of navigation, second stage was to acquire solid knowledge by completing the yacht helmsman certificate, given this possibility, start competing J-24 Argentina until qualifying for the world championship. After these experiences in competition, I completed the last Yacht Skipper certificate given by the Argentine Naval Prefecture. Having the possibility to teach and share this beautiful sport.',
      'someTestimonies': 'some clients experices',
      'testimonyTitle1': '...',
      'testimonyContent1': '...',
      'testimonyTitle2': '...',
      'testimonyContent2': '...',
      'services': 'services',
      'caribeanTour': 'Caribean Tours',
      'boatDelivery': 'Boat Delivery',
      'boatMaintenance': 'Boat Maintenance',
      'company': 'Company',
      'contactUs': 'contact us',
      'careers': 'carees',
      'privacyPolicy': 'privacy policy',
      'terms': 'terms',
      'buildBy': 'Built by ',
      'copyRight': ' Copyright © by Jonas Schemedtmann. You are 100% allowed to use this webpage for both personal and comercial use, credits for the original deginer, Jonas Schmedtmann.'
    }
  },
  es: {
    translation: {
        'yachtSkipper': 'Patron de Yate',
        'contact': 'Contacto',
        'aboutMe': 'Sobre mi',
        'whoAmI': 'quien soy?',
        'whoText': 'Mi nombre es Jeronimo Fernandez Bados nacido y criado en Córdoba, Argentina. Con 22 años soy navegante apasionado y amante del mar. Desde muy temprana edad me dedico a competir y enseñar esta pasión.',
        'myExperience': 'Mi experiencia',
        'experienceText': 'Primer contacto fue en regatta de windsurf, donde aprendí lo básico de navegación, segunda etapa fue adquirir conocimientos solidos realizando el certificado de timonel de yate, dado esta posibilidad, empezar a competir J-24 Argentina hasta clasificar al mundial. Después de estas experiencias en tema competición, realice el ultimo certificado de Patrón de yate dado por Prefectura Naval argentina. Teniendo la posibilidad de enseñar y compartir este hermoso deporte.',
        'someTestimonies': 'experiencias de nuestros clientes',
        'testimonyTitle1': '...',
        'testimonyContent1': '...',
        'testimonyTitle2': '...',
        'testimonyContent2': '...',
        'services': 'servicios',
        'caribeanTour': 'Tours por el caribe',
        'boatDelivery': 'cruze de barcos',
        'boatMaintenance': 'Mantenimiento de botes',
        'company': 'Compania',
        'contactUs': 'Contactame',
        'careers': 'carreras',
        'privacyPolicy': 'Politica de privacidad',
        'terms': 'terminos y condiciones',
        'buildBy': 'Creado por ',
        'copyRight': ' Copyright © por Jonas Schemedtmann. Está 100% autorizado a utilizar esta página web tanto para uso personal como comercial, créditos para el diseñador original, Jonas Schmedtmann.'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;