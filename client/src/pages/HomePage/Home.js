import React from 'react';
import style from './styles.module.css'

const Home = () => {
  return (
    <div className={style['parent-container']}> {/* Add a parent container */}
    <div className={style['custom-rectangle']}>
      {/* Content */}
    </div>
  </div>
  );
}

export default Home;
