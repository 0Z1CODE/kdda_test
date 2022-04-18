import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Box, Typography } from '@mui/material';
import { usePasswordValidation } from '../../hooks/password-hook';
import { styled } from '@mui/material/styles';

// @ts-ignore
import styles from '../../assets/scss/styles.module.scss';

const TooltipMatch = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} placement='right' arrow />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#ffffff',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    height: '38px',
    display: 'flex',
    fontSize: 12,
  },
}));

const TooltipPassMatch = (props: any) => {
  const { translator } = props;

  const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    specialChar,
    match,
    hasSpace,
  ] = usePasswordValidation({
    firstPassword: props.password,
    secondPassword: props.passwordConfirm,
  });

  const checkMatch = () => {
    let checkPass = false;
    const reqLength = props.passwordConfirm?.length >= 8;
    const passwordMatch = props.password === props.passwordConfirm;
    const matchedPassword = reqLength && passwordMatch;

    if (matchedPassword && !hasSpace) {
      checkPass = true;
      return checkPass;
    } else return false;
  };

  return (
    <TooltipMatch
      arrow
      placement='right'
      disableHoverListener
      title={
        <Box component='section' className={styles.ttPassMatch}>
          <Typography
            className={styles.ttPassMatchText}
            component='p'
            style={{ color: checkMatch() ? 'green' : 'red' }}>
            {checkMatch() ? (
              <i className='fas fa-check-circle' />
            ) : (
              <i className='fas fa-exclamation-circle' />
            )}
            {translator('confirmPasswordReq')}
          </Typography>
        </Box>
      }>
      {props.children}
    </TooltipMatch>
  );
};

export default TooltipPassMatch;
