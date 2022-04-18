import React from 'react';
import SelectLang from '../SelectLang';

// @ts-ignore
import styles from '../../assets/scss/styles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <SelectLang />
    </header>
  );
};

export default Header;
