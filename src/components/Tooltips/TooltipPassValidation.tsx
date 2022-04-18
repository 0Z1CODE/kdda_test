import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Box, Typography } from '@mui/material';
import { usePasswordValidation } from '../../hooks/password-hook';
import { styled } from '@mui/material/styles';

// @ts-ignore
import styles from '../../assets/scss/styles.module.scss';

const TooltipPass = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} placement='right' arrow />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#ffffff',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'flex',
    maxWidth: 'none',
    fontSize: 12.5,
  },
}));

const TooltipPassValidation = (props: any) => {
  const { translator, password } = props;

  const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    specialChar,
    match,
    hasSpace,
    letters,
  ] = usePasswordValidation({
    firstPassword: password,
  });

  const includesPassElements = () => {
    if (hasNumber && upperCase && lowerCase && specialChar) {
      return true;
    } else return false;
  };

  const checkArrayIsTrue = () => {
    if (letters || (hasNumber && !hasSpace) || (specialChar && !hasSpace)) {
      return true;
    } else return false;
  };

  return (
    <TooltipPass
      arrow
      placement='right'
      disableHoverListener
      title={
        <Box component='section' className={styles.ttSection}>
          <Typography component='p' className={styles.ttMainText}>
            {translator('passwordReqHead')}
          </Typography>
          <Typography
            component='p'
            className={styles.ttvalidText}
            sx={{
              color: validLength ? 'green' : 'red',
            }}>
            {validLength ? (
              <i className='fas fa-check-circle' />
            ) : (
              <i className='fas fa-exclamation-circle' />
            )}
            {translator('passwordReq1')}
          </Typography>
          <Typography
            component='p'
            className={styles.ttvalidText}
            sx={{ color: includesPassElements() ? 'green' : 'red' }}>
            {includesPassElements() ? (
              <i className='fas fa-check-circle' />
            ) : (
              <i className='fas fa-exclamation-circle' />
            )}
            {translator('passwordReq2')}
          </Typography>
          <Box component='ul' className={styles.reqTextList}>
            <Box component='li'>{`- ${translator('passwordReq2a')}`}</Box>
            <Box component='li'>{`- ${translator('passwordReq2b')}`}</Box>
            <Box component='li'>{`- ${translator('passwordReq2c')}`}</Box>
            <Box component='li'>{`- ${translator('passwordReq2d')}`}</Box>
          </Box>
          <Typography
            component='p'
            className={styles.ttvalidText}
            sx={{ color: checkArrayIsTrue() ? 'green' : 'red' }}>
            {checkArrayIsTrue() ? (
              <i className='fas fa-check-circle' />
            ) : (
              <i className='fas fa-exclamation-circle' />
            )}
            {translator('passwordReq3')}
          </Typography>
        </Box>
      }>
      {props.children}
    </TooltipPass>
  );
};

export default TooltipPassValidation;
