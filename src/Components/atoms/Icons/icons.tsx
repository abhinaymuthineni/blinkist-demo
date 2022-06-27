import React from 'react';
import {StyledEngineProvider} from '@mui/material';

interface Props{
  source:string;
}

function Icons(props:Props) {
  return (
    <StyledEngineProvider injectFirst>
    <img src={props.source} alt="try"></img>
    </StyledEngineProvider>
  )
}

export default Icons