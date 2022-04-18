import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

// @ts-ignore
import styles from '../../assets/scss/styles.module.scss';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box component='footer' className={styles.footer}>
      <Typography className={styles.copyright}>
        {`© ${t('copyright')}`}
      </Typography>
      <Box component='section'>
        {/* <Link
          target='_blank'
          underline='hover'
          className={styles.privacy}
          href='https://www.kyoceradocumentsolutions.us/en/footer/privacy-and-cookies/online-privacy-statement.html'
          rel='noreferrer'>
          {t('privacystatement')}
        </Link> */}
        <Link
          target='_blank'
          underline='hover'
          className={styles.license}
          href='https://www.kyoceradocumentsolutions.us/en/footer/terms-of-use.html'
          rel='noreferrer'>
          {t('licenseagreement')}
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
