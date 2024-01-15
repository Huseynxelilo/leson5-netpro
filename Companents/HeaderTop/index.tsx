"use client"
import * as React from 'react';
import { Box,Stack } from '@mui/material';
import { icon, navLink } from './data';
import MainLink from '../common/Link';
import MainSelect from '../Select/MainSelect';

const boxStyle = {
  
    height: 70, 
    gap:2,
    flexDirection:'row',
    alignItems:'center',
    bgcolor:'primary.main',
    justifyContent:'space-between',
    "& > a": {color: "white", fontSize: "13px"}
};

const boxstyle = {
   "& > a": {
    color:"white",
    display: "inline-block",
    border: "1px solid white",
    px: "0,5em",
    py: "0,3em",
    ml: 2,
    } 
};

export default function HeaderTop() {
    const [age, setAge] = React.useState("one");
    const selectData = [
      'one','tow','three'
    ]
  return (
          <Stack
           sx={boxStyle}
            >

    {navLink.map(({id, title, icon}) => {
      return (
        <MainLink to="/" key={id}>
          {icon} {title}
        </MainLink>
      )
    })}

    <Box sx={boxstyle}>
      {icon.map(({ id, icon }) => {
       return(
       <MainLink key={id} to='/'>
        {icon}
       </MainLink>
       ) 
      })}
    </Box>

    <MainSelect state={age} setState={setAge} data={selectData}/>
    </Stack>
  );
}
