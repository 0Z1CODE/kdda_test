import React, { useState } from 'react';
import {
  Modal,
  Box,
  Button,
  Typography,
  Link,
  Stack,
  FormGroup,
  Checkbox,
} from '@mui/material';

import { useTranslation } from 'react-i18next';

import { useRecoilState } from 'recoil';
import { eulaState } from '../../recoil/atoms';

import { loginBrand } from './../../recoil/atoms';
import { eulaWelcomeText } from '../../hooks/theme-hook';

// @ts-ignore
import styles from '../../assets/scss/styles.module.scss';

const Eula: React.FC = (props) => {
  const { t, i18n } = useTranslation();
  //@ts-ignore
  const { aceptEula } = props;
  const [openEula, setOpenEula] = useRecoilState(eulaState);

  const [modalChecked, setModalChecked] = useState({
    agreement: false,
    statement: true, // if need to add Privacy Statement checkbox, just turn this state to value "false" and uncomment code below
  });

  const isDisabled = Object.values(modalChecked).some((e) => e === false);

  const [loginLayout, setLoginLeyout] = useRecoilState(loginBrand);

  return (
    <Modal component='section' keepMounted open={openEula}>
      <Box
        className={styles.eulaSection}
        sx={{
          position: 'absolute',
          top: '36.5%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Typography className={styles.eulaWelcomeText}>
          {eulaWelcomeText(loginLayout, t)}
        </Typography>
        <Typography className={styles.eulaMainText}>
          {t('EULABody1')}
          <Link
            className={styles.eulaLink}
            target='_blank'
            underline='hover'
            href='https://www.kyoceradocumentsolutions.us/en/footer/terms-of-use.html'
            rel='noreferrer'>
            {t('EULABodyAnchor')}
          </Link>
          {/* {` ${t('and')} `}
          <Link
            className={styles.eulaLink}
            target='_blank'
            underline='hover'
            href='https://www.kyoceradocumentsolutions.us/en/footer/privacy-and-cookies/online-privacy-statement.html'
            rel='noreferrer'>
            {t('privacystatement')}
          </Link> */}
          {t('EULABody2')}
        </Typography>
        <FormGroup>
          <Typography className={styles.eulaCheckBoxText}>
            <Checkbox
              className={styles.eulaCheckBox}
              size='small'
              disableRipple
              onClick={() =>
                setModalChecked({
                  ...modalChecked,
                  agreement: !modalChecked.agreement,
                })
              }
            />
            {t('EULAAccept')}
          </Typography>
          {/* <Typography className={styles.eulaCheckBoxText}>
            <Checkbox
              className={styles.eulaCheckBox}
              size='small'
              disableRipple
              onClick={() =>
                setModalChecked({
                  ...modalChecked,
                  statement: !modalChecked.statement,
                })
              }
            />
            {t('PrivacyAccept')}
          </Typography> */}
        </FormGroup>
        <Stack
          className={styles.eulaButtonSection}
          spacing={1}
          direction='row'
          justifyContent='flex-end'>
          <Button
            className={styles.eulaButtonCancel}
            disableRipple
            onClick={() => setOpenEula(false)}>
            {t('cancel')}
          </Button>
          <Button
            className={styles.eulaButtonOk}
            onClick={aceptEula}
            variant='contained'
            disableRipple
            disableElevation
            disabled={isDisabled}>
            {t('ok')}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default Eula;
