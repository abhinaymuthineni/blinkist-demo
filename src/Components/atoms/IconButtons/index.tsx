import React from 'react';
import { IconButton,StyledEngineProvider } from '@mui/material';


interface Props{
  children: React.ReactNode;
  disabled:boolean,
  onClick: ()=>void,
  icon?: any,
}

function IconButtons(props:Props) {
  return(
    <StyledEngineProvider injectFirst>
      <IconButton color="primary" disabled={props.disabled} onClick={props.onClick}>
        {props.children}
      </IconButton>
    </StyledEngineProvider>);
}

export default IconButtons;