import { makeStyles } from "@material-ui/core";
import { Typography ,StyledEngineProvider} from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Data/Navigation";
import IconText from "../../atoms/IconTexts";

const useStyles = makeStyles({
  forTypo: {
    
    align: "center",
    color: "#6D787E",
    minWidth: "188px",
    width: "auto",
    paddingBottom: "24px",
    paddingRight: "120px",

    "&:hover": {
      color: "#116BE9",
      fontWeight: "700",
    },
  },

  fisrtContain: {
    fontFamily:"Cera Pro",
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "30px",
    // paddingBottom: "24px",
  },
});

function ExtendedNav() {
  const classes = useStyles();

  let navigate = useNavigate();

  let allBooksPage = () => {
    navigate("/allbooks");
  };

  return (
    <StyledEngineProvider injectFirst>
    <Box
      height={"auto"}
      width={"100%"}
      sx={{ backgroundColor: "#F1F6F4", position: "relative", top: "-191px" }}
      style={{fontFamily:"Cera Pro"}}
    >
      <Box className={classes.fisrtContain}>
        <Box display={"flex"} borderBottom="solid 1px black" width="1020px" marginLeft={"-20px"}>
          <Typography className={classes.forTypo}>
            Explore by category
          </Typography>
          <Typography className={classes.forTypo}>
            See recently added titles
          </Typography>
          <Typography className={classes.forTypo}>
            See popular titles
          </Typography>
        </Box>
      </Box>
      <Box className={classes.fisrtContain}>
        <Box width="1020px" display={"flex"} flexWrap={"wrap"} marginLeft={"14px"}>
          {Navigation.map((data, key) => {
            return (
              <Box
                flexBasis={"33.3333333333%"}
                paddingBottom={"28px"}
                key={key}
              >
                <Link
                  sx={{ textDecoration: "None" }}
                  onClick={allBooksPage}
                  data-testid={"link-a"}
                >
                  <IconText
                    name={data.title}
                    key={key}
                    icon={data.icon}
                    styling={"extended"}   
                  />
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
    </StyledEngineProvider>
  );
}

export default ExtendedNav;