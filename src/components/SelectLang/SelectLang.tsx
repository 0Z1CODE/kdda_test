import React, { useState } from 'react';
import { Box, MenuItem, Button, Menu } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SelectLang: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langOptions = [
    {
      value: 'de',
      label: 'Deutsch',
    },
    {
      value: 'ja',
      label: '日本語',
    },
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'it',
      label: 'Italiano',
    },
    {
      value: 'fr',
      label: 'Français',
    },
  ];

  const [lang, setLang] = useState('English');

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
    <>
      <Box component='div' sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          className='selectLang'
          sx={{
            padding: '0',
            margin: '0',
            color: '#fff',
            display: 'flex',
            textTransform: 'none',
            fontSize: '13px',
          }}
          onClick={handleClick}>
          <i
            className='fas fa-globe-americas pr-1'
            style={{ paddingRight: '6px' }}
          />
          <span>{lang}</span>
          <i
            className='fa-solid fa-caret-down'
            style={{ paddingLeft: '4px' }}
          />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          sx={{ marginTop: '2px' }}>
          {langOptions.map((lang) => (
            <MenuItem
              key={lang.value}
              onClick={() => handleSelect(lang)}
              sx={{
                fontSize: '13px',
                padding: '4px 83px 4px 24px',
                letterSpacing: 'normal',
              }}>
              {lang.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default SelectLang;
