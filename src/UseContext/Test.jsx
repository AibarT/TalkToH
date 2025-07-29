import React from 'react';
import Main from './Main';
import { LanguageContext } from './LanguageProvider';
import { useContext } from 'react';
import styles from './Test.module.css';

const Test = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{translations.title}</h2>
      <Main />
    </div>
  );
};

export default Test;