import React, { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';
import styles from './Main.module.css';

const Main = () => {
  const { translations, language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{translations.main} 🧑‍💻</h3>
      <p className={styles.message}>{translations.message}</p>
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        className={styles.languageSelector}
      >
        <option className='op1' value="kz">Қазақша</option>
        <option value="ru">Русский</option>
        <option className='op3' value="en">English</option>
      </select>
    </div>
  );
};

export default Main;