import React from 'react';
import Header from './components/header/Header.js';
import Card from './components/card/Card.js';
import Footer from './components/Footer/Footer.js';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.mainContent}>
        <h1 className={styles.title}>Welcome to Challenge 17</h1>
        <div className={styles.cardContainer}>
          <Card
            title="React + SASS"
            description="Using SASS modules to create beautiful and maintainable styles."
          />
          <Card
            title="Modular Design"
            description="Each component has its own SASS module for scoped styling."
          />
          <Card
            title="Creativity"
            description="Add your own touch to make this UI stand out!"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
