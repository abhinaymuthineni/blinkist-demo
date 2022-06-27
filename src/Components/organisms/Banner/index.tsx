import { Box, Typography,StyledEngineProvider } from "@mui/material";
import React from "react";
import BannerImage from "../../../images/bannerimg.png";

function Banner() {
  return (
    <StyledEngineProvider injectFirst>
    <Box
      style={{
        fontFamily:"Cera Pro",
        height: "264",
        width: "1000px",
        backgroundColor: "#F1F6F4",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box height={"264px"} width={"470px"}>

        <Typography
          variant="h1"
          fontStyle={"normal"}
          fontFamily={"Cera Pro"}
          fontSize={"36px"}
          fontWeight={"700"}
          lineHeight={"45px"}
          paddingTop={"45px"}
          textAlign={"left"}
        >
          Explore Books on <br></br>
          entrepreneurship
        </Typography>

        <Typography
          variant="subtitle2"
          fontStyle={"normal"}
          fontFamily={"Cera Pro"}
          fontSize={"18px"}
          lineHeight={"23px"}
          color={"#6D787E"}
          paddingTop={"15px"}
          textAlign={"left"}
        >
          Everything you need to know about thriving on a<br></br>
          shoestring budget, making your first million, and hiring <br></br>
          right from the start.
        </Typography>
      </Box>

      <Box>
        <img
          src={BannerImage}
          alt="Banner img"
          height={"230px"}
          width={"249px"}
        />
      </Box>
    </Box>
    </StyledEngineProvider>
  );
}

export default Banner;