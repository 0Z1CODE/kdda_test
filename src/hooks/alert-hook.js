import React, { useState } from 'react';
import { Snackbar, Box, Typography, Button } from '@mui/material';
import { createPortal } from 'react-dom';

import styles from '../assets/scss/styles.module.scss';

const alert = document.getElementById('alert');

export const ErrorAlert = (text, open, close) => {
  return (
    <>
      {createPortal(
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          className={styles.snackbar}
          open={open}>
          <Box component='section' className={styles.alertContainer}>
            <Typography className={styles.alertText}>{text}</Typography>

            <Button
              disableRipple
              className={styles.alertCloseBtn}
              onClick={close}>
              <span>+</span>
            </Button>
          </Box>
        </Snackbar>,
        alert
      )}
    </>
  );
};

// export const useAxiosPostRequest = () => {
//   const [postData, setData] = useState();
//   const [postError, setError] = useState();
//   const [loading, setLoading] = useState(true);
//   const [keykloackAuth, setkeykloackAuth] = useRecoilState(keykloackAuthoakState);

//   const postReq = (fetchEndpoint, postData) => {
//     if (!fetchEndpoint) return;
//     axios
//       .post(`${fetchEndpoint}`, postData, {
//         headers: {
//           "content-type": "application/x-www-form-urlencoded",
//         },
//       })
//       .then((r) => r.data)
//       .then(setkeykloackAuth)
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch((e)=> setkeykloackAuth(e));
//   }

//   return {
//     postReq,
//     postData,
//     postError,
//     keykloackAuth
//   };
// };
