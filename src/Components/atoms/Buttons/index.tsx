import { makeStyles } from "@mui/styles";
import { Button, StyledEngineProvider } from "@mui/material";
import React from "react";

const useStyles = makeStyles({
  connect: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    // padding: "12px 116px",
    gap: "10px",

    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20.11px",
    textTransform: "none",
    position: "relative",
    width: "30%",
    height: "44px",
    backgroundColor: "#2ce080",
    color: "black",
    "&:hover": {
      backgroundColor: "#00C263",
    },
  },
  explore: {
    width: "auto",
    height: "28px",

    backgroundColor: "White",
    color: "black",
    outline: "none",
    borderBottom: "solid 0px white",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "white",
      borderBottom: "solid 3px #22C870",
      boxShadow: "none",
      outline: "none",
      borderRadius: "0px",
    },
  },

  exploreNoH: {
    width: "auto",
    height: "auto",
    backgroundColor: "White",
    color: "black",
    outline: "none",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "White",
      color: "black",
      boxShadow: "none",
    },
  },

  readNow: {
    width: "25%",
    height: "auto",

    backgroundColor: "White",
    color: "#22C870",
    outline: "none",
    border: "solid 1px black",
    textTransform: "none",
    fontFamily: "Cera Pro",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "White",
      color: "black",
      boxShadow: "none",
    },
  },

  library: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "14px 24px",
    gap: "8px",
    textTransform: "none",
    position: "relative",
    width: "284px",
    height: "52px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    backgroundColor: "white",
    color: "#0365F2",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#0365F2",
      color: "white",
    },
  },
});

interface Props {
  name: string;
  onClick: any;
  classing: string;
  icon: React.ReactNode | undefined;
  end: React.ReactNode | undefined;
  disabled?:boolean;
}

function Buttons(props: Props) {

  const classes = useStyles();
  let className;

  if(props.classing === "connect"){
    className=classes.connect;
  }
  else if( props.classing === "explore"){
    className=classes.explore;
  }
  else if( props.classing === "library"){
    className=classes.library;
  }
  else if(props.classing ==="readNow"){
    className = classes.readNow;
  }
  else{
    className=classes.exploreNoH;
  }

  return (
    <StyledEngineProvider injectFirst>
      <Button
        variant="contained"
        className={className}
        startIcon={props.icon}
        endIcon={props.end}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.name}
      </Button>
    </StyledEngineProvider>
  );
}

export default Buttons;