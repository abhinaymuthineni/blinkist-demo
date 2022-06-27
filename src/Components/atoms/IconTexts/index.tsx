import { Box, Typography,StyledEngineProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./index.css";


const useStyles = makeStyles({
  extended: {
    fontFamily:"Cera Pro",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    display: "flex",
    color:'#6D787E',
   

    "&:hover": {
      color: "#0365F2",
    },
    
  },
  cardText:{
    fontFamily:"Cera Pro",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "18px",
    letterSpacing: "0px",
    textAlign: "left",
    display: "flex",
    fontStyle:'normal',
    color: '#6D787E',
  }
});

interface Props {
  name: string;
  icon: React.ReactNode;
  styling:string
}

function IconText(props: Props) {
  const classes = useStyles();
  let styles = props.styling === "extended"? classes.extended : classes.cardText;
  return (
    <StyledEngineProvider injectFirst>
      <Typography component="div" className={styles}>
        <Box >{props.icon}</Box> &ensp;
        <Box >{props.name}</Box>
      </Typography>
    </StyledEngineProvider>
  );
}

export default IconText;