import React, { Component } from 'react';
import styles from './styles';
import LogoImage from 'SharedStyles/logo.png';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <img className={styles.logoImage} src={LogoImage} />
      </div>
      <div className={styles.logoTitle}>OpenCrisisBoard</div>
    </div>
  );
};

export default Logo;
