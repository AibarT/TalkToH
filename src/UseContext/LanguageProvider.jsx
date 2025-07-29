import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  kz: {
    title: 'Бұл Test компоненті',
    main: 'Бұл Main компоненті',
    message: 'Миссия түн ортасында басталады.',
  },
  ru: {
    title: 'Это Test компонент',
    main: 'Это Main компонент',
    message: 'Миссия начинается в полночь.',
  },
  en: {
    title: 'This is Test component',
    main: 'This is Main component',
    message: 'Mission starts at midnight.',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('kz');

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
