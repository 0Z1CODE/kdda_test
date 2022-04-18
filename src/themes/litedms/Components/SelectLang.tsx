import React, { useState } from 'react';
import { Box, MenuItem, Button, Menu } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { langOptions } from '../../../i18n/langOptions';
// @ts-ignore
import styles from '../assets/scss/styles.module.scss';

const SelectLang: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('English');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (language: { value: any; label: any }) => {
    setAnchorEl(null);
    setLang(language.label);
    i18n.changeLanguage(language.value);
  };

  return (
    <Box component='section'>
      <Button
        disableRipple
        className={styles.headerButton}
        onClick={handleClick}>
        <div>
          <i className='fas fa-globe-americas pr-1' />
          <span>{lang}</span>
          <i className='fa-solid fa-caret-down' />
        </div>
      </Button>
      <Menu
        className={styles.headerMenu}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}>
        {langOptions.map((lang) => (
          <MenuItem
            className={styles.headerMenuItem}
            disableRipple
            key={lang.value}
            onClick={() => handleSelect(lang)}>
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SelectLang;
