import { Avatar,StyledEngineProvider} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles=makeStyles ({
  avatar:{
    height: '44px',
    width: '44px',
  }
});

interface Props
{
    chars?:string;
}

function Avatars(props:Props) {

  const classes = useStyles();
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Avatar sx={ {bgcolor:'#69A6E3'} } className={classes.avatar}>{props.chars}</Avatar>
      </StyledEngineProvider>
    </>
  )
}

export default Avatars;