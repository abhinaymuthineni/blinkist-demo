import { Backdrop,StyledEngineProvider, Box } from "@mui/material";
import React, { useState } from "react";
import Icons from "../../atoms/Icons/icons";
import Logo from "../../../images/logo.svg";
import Buttons from "../../atoms/Buttons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Search from "../../../images/search.svg";
import Avatars from "../../atoms/Avatars";
import ExtendedNav from "../ExtendedNav";
import { useNavigate } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import zIndex from "@material-ui/core/styles/zIndex";


interface Props {
  avatarIcon: boolean;
  chars?:string;
}

function Header(props: Props) {
  let navigate = useNavigate();

  let libraryPage = () => {
    navigate("/");
  };

  const { logout, isAuthenticated } = useAuth0();

  const [tryingback, settryingback] = useState(false);

  const [open, setOpen] = useState(false);

  const backdroptry = () => {
    settryingback(!tryingback);
    setOpen(!open);
  };
  const [ logouttry, setLogouttry ] = useState(false);

  const logoutbackdrop = () => {
    setLogouttry(!logouttry);
  };

  let ava;
  if (props.avatarIcon) {
    ava = (
      <Box
        style={{ fontFamily: "Cera Pro" ,display: "flex", alignItems: "center", marginRight: "170px" }}
      >
        <Buttons
          name=" "
          classing="exploreNoH"
          end={<KeyboardArrowDownIcon />}
          onClick={logoutbackdrop}
          icon={<Avatars chars={props.chars?.charAt(0)} />}
        />
      </Box>
    );
  } else {
    ava = (
      <Box style={{ fontFamily: "Cera Pro" ,display: "flex",alignItems: "center", marginRight: "60px" }}>
        <Buttons
          name="Account"
          classing="exploreNoH"
          end={<KeyboardArrowDownIcon />}
          onClick={logoutbackdrop}
          icon={undefined}
        />
      </Box>
    );
  }

  let logutAction;

  if (isAuthenticated) {
    logutAction = (
      <Buttons
        name={"Log Out"}
        onClick={() => logout()}
        classing={"connect"}
        icon={undefined}
        end={undefined}
      />
    );
  }
  
  return (
    <StyledEngineProvider injectFirst>
    <Box width="91%" >
      <Box
          fontFamily='Cera Pro'
          display="flex"
          justifyContent= "space-between"
          alignItems= "center"
          height="56px"
          marginLeft= "355px"
      >
        <Box  
            fontFamily='Cera Pro'
            width= "377px"
            display="flex"
            justifyContent= "space-between"
            alignItems= "center"
        >
          <Icons source={Logo} />
          <Icons source={Search} />
          <Buttons
            name="Explore"
            classing="explore"
            end={<KeyboardArrowDownIcon />}
            onClick={backdroptry}
            icon={undefined}
          />
          <Buttons
            name="My Library"
            classing="explore"
            end={undefined}
            onClick={libraryPage}
            icon={undefined}
          
          />
        </Box>
        {ava}
      </Box>
      {tryingback ? (
        <Backdrop
          open={tryingback}
          sx={{
            position: "absolute",
            top: "80px",
            backgroundColor: "rgba(157, 163, 166, 0.45)",
            zIndex: zIndex.drawer + 1,
          }}
          onClick={backdroptry}
        >
          <ExtendedNav font-family="Cera Pro"></ExtendedNav>
        </Backdrop>
      ) : null}

{logouttry ? (
  <Box display={"flex"} justifyContent="flex-end" width="95%" >
    <Box width="500px" display={"flex"} justifyContent="flex-end">
  {logutAction}
  </Box>
  </Box>
      ) : null}
    </Box>
    </StyledEngineProvider>
  );
}

export default Header;