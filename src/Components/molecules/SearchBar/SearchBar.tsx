import React from 'react'
import './SearchBar.css'
import { InputBase ,StyledEngineProvider} from '@mui/material';
import {ReactComponent as SearchIcon} from "../../../images/search.svg";


interface Props{
    palceholder:string
}

function SearchBar(props:Props) {
  return (
    <StyledEngineProvider injectFirst>
    <div className='search'>
      <div className='frame1'>
          <SearchIcon/>
          <InputBase placeholder={props.palceholder}/>
      </div>
      <div className='vector1'></div>
    </div>
    </StyledEngineProvider>
  )
}

export default SearchBar;