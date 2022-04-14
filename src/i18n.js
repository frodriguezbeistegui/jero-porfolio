import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  enUS: {
    translation: {
      'yachtSkipper': 'Yacht Skipper',
      'contact': 'Contact',
      'aboutMe': 'about me',
      'whoAmI': 'who am i?',
      'whoText': 'My name is Jeronimo Fernandez Bados born in Córdoba, Argentina. At 22 years old, I am a passionate sailor and lover of the sea. From an early age I dedicated myself to competing and teaching this passion. Open to new challenges and confident in my abilities.',
      'myExperience': 'My Experience',
      'experienceText': 'My first contact with sailing was in windsurfing regattas, where I learned the basic sailing requirements. In a second stage, I obtained the "Yacht Helmsman" certification in Córdoba, Argentina. Which allowed me to acquire solid knowledge of navigation. Given this possibility, I competed for several years in J-24 Argentina until I qualified for the World Cup. After these experiences in competition, I made the last "Yacht Skipper" certificate given by the Argentine Naval Prefecture, which finally gave me the opportunity to teach and share this beautiful sport.',
      'someTestimonies': 'some clients experices',
      'testimonyTitle1': '...',
      'testimonyContent1': 'Beautiful tour, impressive the treatment of the captain and his sailor. Super recommended for those who seek to be in contact with nature, travel with family or friends. We have beautiful moments!',
      'testimonyTitle2': '...',
      'testimonyContent2': 'We had a great day on the water with the crew. Everything was perfect and they made sure we were well taken care of and even offered to customize our experience based on our interests (more boating vs more snorkeling etc). the food they prepared was fresh, delicious and perfect for our adventure! We couldn\'t have asked for a better experience.',
      'services': 'services',
      'caribeanTour': 'Tours',
      'yatch': 'Yatch',
      'catamaran': 'Catamaran',
      'sailBoat': 'Sailboat',
      'motorBoat': 'Motor boat',
      'others': 'Others',
      'captainNCrew': 'Captain and crew',
      'snorkel': 'Snorkeling',
      'foodNDrink': 'Food and drink',
      'paddleBoard': 'Paddle Board',
      'qualifiedSkipper': 'Qualified yacht delivery Skipper',
      'withCrew': 'Crew (optional)',
      'NMNavigated': '+1000 NM navigated',
      'area': 'Area: USA/Caribe/Bahamas',
      'optional': 'Professional Seatrade (optional)',
      'deckCleaning': 'Deck cleaning',
      'deepCleaning': 'Deep cleaning',
      'engineCheck': 'Engine check',
      'generalFixes': 'General fixes',
      'bilgeDrain': 'Bilge drain',
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
        'whoText': 'Mi nombre es Jeronimo Fernandez Bados nacido en Córdoba, Argentina. Con 22 años soy navegante apasionado y amante del mar. Desde muy temprana edad me dedico a competir y enseñar esta pasión. Abierto a nuevos desafíos y confianza en mis aptitudes. ',
        'myExperience': 'Mi experiencia',
        'experienceText': 'Mi Primer contacto con la navegación fue en regattas de windsurf, donde aprendí los requerimientos básicos de navegación. En una segunda etapa, obtuve la certificación de “Timonel de yate” en Córdoba, Argentina. El cual me permitió adquirir los conocimientos solidos de navegación. Dada esta posibilidad competí varios años en J-24 Argentina hasta clasificar al mundial. Luego de estas experiencias en competición, realice el ultimo certificado de “Patrón de yate” dado por Prefectura Naval Argentina, lo que finalmente me otorgó la posibilidad de enseñar y compartir este hermoso deporte.',
        'someTestimonies': 'experiencias de nuestros clientes',
        'testimonyTitle1': '...',
        'testimonyContent1': 'Hermoso tour, impresionante el trato del capitán y su marinero. Super recomendable para aquellas personas que buscar estar en contacto con la naturaleza, viaje en familia o amigos. Nosotros nos llevamos hermosos momentos!',
        'testimonyTitle2': '...',
        'testimonyContent2': 'Disfrutamos mucho nuestra tarde en el agua con la tripulación. Todo fue perfecto y se aseguraron de que estuviéramos bien cuidados e incluso se ofrecieron a personalizar nuestra experiencia basada en nuestros intereses (más navegación vs más esnórquel, etc.). la comida que ellos prepararon fue fresca, deliciosa y perfecta para nuestra aventura! Nosotros no podríamos haber pedido una mejor experiencia',
        'services': 'servicios',
        'caribeanTour': 'Tours',
        'yatch': 'Yate',
        'catamaran': 'Catamarán',
        'sailBoat': 'Velero',
        'motorBoat': 'Bote a motor',
        'others': 'Otros',
        'captainNCrew': 'Capitan y tripulacion',
        'snorkel': 'Snorkel',
        'foodNDrink': 'Comida y Bebidas',
        'paddleBoard': 'Paddle Board',
        'qualifiedSkipper': 'Patrón calificado de entrega de yates',
        'withCrew': 'Con tripulacion (opcional)',
        'NMNavigated': '+1000 Mn navegadas',
        'area': 'Area: EEUU/Caribe/Bahamas',
        'optional': 'Seatrade profecional (opcional)',
        'deckCleaning': 'Lavado de cubierta',
        'deepCleaning': 'Limpieza profunda',
        'engineCheck': 'Revision del motor',
        'generalFixes': 'Arreglos generales',
        'bilgeDrain': 'Desagote de sentina',
        'boatDelivery': 'Cruze de barcos',
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
    lng: "enUS", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;