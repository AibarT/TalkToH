import React from 'react';
import { LanguageProvider } from './LanguageProvider';
import Test from './Test';
import styles from './App.module.css';

function App() {
  return (
    <LanguageProvider>
      <div className={styles.app}>
        <Test />
        <p className={styles.footer}>Secret language selection app © 2025</p>
      </div>
    </LanguageProvider>
  );
}

export default App;