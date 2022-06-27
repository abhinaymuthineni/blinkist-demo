import { Box, StyledEngineProvider} from "@mui/material";
import React from "react";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import Tabs from "../../molecules/TabsComponent";
import { makeStyles } from "@mui/styles";
import { useAuth0} from "@auth0/auth0-react";

const useStyles = makeStyles({
  libraryText: {
    fontStyle: "normal",
    fontFamily: "Cera Pro",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "45px",
    position:"relative",
    left:"40px",
    width:'500px',
    padding:'25px 0px',
    top:"25px"
  },
});

function LibraryTemplate() {
  const classes = useStyles();

  const {user} = useAuth0();
  return (
    <StyledEngineProvider injectFirst>
    <Box minHeight={"100vh"}>
      <Box width="90%" padding="0% 5%">
      <Box paddingTop="25px">
      <Header avatarIcon={true} chars={user?.name}></Header>
      </Box>
      <Box className={classes.libraryText} marginLeft={"165px"} marginRight={"998px"} marginTop={"25px"}>My Library</Box>
      <Box position={"relative"} left={"245px"} width={"90%"} minHeight={1000}>
      <Tabs></Tabs>
      </Box>
      </Box>
      <Footer/>
    </Box>
    </StyledEngineProvider>

  );
}

export default LibraryTemplate;