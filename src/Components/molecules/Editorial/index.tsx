import { List, ListItem,StyledEngineProvider,ListItemText} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle=makeStyles({
    heading:{
        fontFamily:'Cera Pro' ,
            fontWeight:'700 !important',
            fontSize:'16px !important',
            lineHeight:'24px !important',
    },
    iteming:{
      fontFamily:'Cera Pro' ,
          fontWeight:'400 !important',
          fontSize:'16px !important',
          lineHeight:'24px !important',
  },
});

interface Props{
  listHead:string;
  listingItems:string[];
}

function Editorial(props:Props) {

  const classes = useStyle();
  const trying = props.listingItems;
  const listing = trying.map((item, key) =>
  <ListItem style={{ padding: "0px" }} key={key} >
    <ListItemText secondary={item} classes={{secondary:classes.iteming}}/>
  </ListItem>
  );

  return (
    <StyledEngineProvider injectFirst>
    <List
      style={{
        height: "auto",
        width: "214px",
        display: "flex",
        padding: "0px",
        gap: "16px",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <ListItem style={{ padding: "0px" }}>
        <ListItemText classes={{primary:classes.heading}} primary={props.listHead}/>
      </ListItem>
      {listing}
    </List>
    </StyledEngineProvider>
  );
}

export default Editorial;