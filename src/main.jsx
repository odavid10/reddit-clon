import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

import App from "./App.jsx";
import { store } from "./store";
import en from "./translations/en.json";
import es from "./translations/es.json";

const IsClientES = window.navigator.language.includes("es");

i18n.use(initReactI18next).init({
  // Configuración de i18next
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: IsClientES ? "es" : "en", // Idioma predeterminado
  fallbackLng: "en", // Idioma de respaldo si no se encuentra la traducción
  interpolation: {
    escapeValue: false, // Permite el uso de variables en las traducciones
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
