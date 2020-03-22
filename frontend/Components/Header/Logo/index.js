import React, { Component } from 'react';
import { Link } from 'react-router'
import styles from './styles';
import LogoImage from 'SharedStyles/logo.png';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link to='/' className={styles.logo}>
        <img className={styles.logoImage} src={LogoImage} />
      </Link>
      <h1 className={styles.logoTitle}>
        <Link to="/">OpenCrisisBoard</Link>
      </h1>
    </div>
  );
};

export default Logo;
