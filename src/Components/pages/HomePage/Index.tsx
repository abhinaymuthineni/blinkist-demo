import { Box,StyledEngineProvider } from "@mui/material";
import React from "react";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import { makeStyles } from "@mui/styles";
import Banner from "../../organisms/Banner";
import CardsList from "../../molecules/CardsList";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import {useAuth0} from "@auth0/auth0-react";

const useStyles = makeStyles({
  libraryText: {
    fontStyle: "normal",
    fontFamily: "Cera Pro",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30.17px",
    position:"relative",
    left:"86px",
    textAlign:'left',
    width:'500px',
    padding:'25px',
  },
});

function HomeTemplate() {
  const classes = useStyles();

  const {user} = useAuth0();
  return (
    <StyledEngineProvider injectFirst>
    <Box minHeight={"100vh"} >
      <Box width="90%" padding="0% 5%">
      <Box paddingTop="25px">
      <Header avatarIcon={true} chars={user?.name}></Header>
      </Box>
      <Box display="flex" justifyContent={"center"} width="99%" padding="10px" marginTop="20px">
      <Banner/>
      </Box>
      <Box position="relative" padding={"50px"} left="320px" width={"80%"}>
      <SearchBar palceholder={"Search by title or author"}/>
      </Box>
      <Box position={"relative"} left={"254px"} width={"90%"} minHeight={1000}>
      <Box className={classes.libraryText}>Trending Blinks</Box>
      <CardsList librarybu={true} checkComplete={0}></CardsList>
      <br/>
      <Box className={classes.libraryText}>Just Added</Box>
      <CardsList librarybu={true} checkComplete={0}></CardsList>
      <Box className={classes.libraryText}>Featured audio blinks</Box>
      <CardsList librarybu={true} checkComplete={0}></CardsList>
      </Box> 
      </Box>
      <Box paddingTop="20px">
      <Footer></Footer>
      </Box>
    </Box>
    </StyledEngineProvider>
  );
}

export default HomeTemplate;