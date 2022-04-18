import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// @ts-ignore
import styles from '../../assets/scss/styles.module.scss';

const TooltipFl = styled(({ className, ...props }: TooltipProps) => (
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

const TooltipReq = (props: any) => {
  const { username, transtalor } = props;
  return (
    <TooltipFl
      arrow
      placement='right'
      disableHoverListener
      title={
        <Box
          component='section'
          className={styles.ttReq}
          style={{ color: username ? 'green' : 'red' }}>
          {username ? (
            <i className='fas fa-check-circle' />
          ) : (
            <i className='fas fa-exclamation-circle' />
          )}
          <span className={styles.ttReqText}>{transtalor('usernameReq')}</span>
        </Box>
      }>
      {props.children}
    </TooltipFl>
  );
};

export default TooltipReq;

export const validUser = (name: string) => {
  return /^[A-Za-z0-9]+$/.test(name) && name?.length >= 4;
};
