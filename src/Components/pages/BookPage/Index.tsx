import { Box, StyledEngineProvider, Tab, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";  
import { makeStyles } from "@mui/styles";
import IconText from "../../atoms/IconTexts";
import { ReactComponent as Time } from "../../../images/time.svg";
import Buttons from "../../atoms/Buttons";
import api from "../../../appInterface/api";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ReactComponent as RightArrow } from "../../../images/rightArrow.svg";
import { useParams } from "react-router-dom";
import { useAuth0} from "@auth0/auth0-react";

const useStyles = makeStyles({
  titleText: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "36px !important",
    lineHeight: "45.25px !important",
    padding:'25px 0px',
  },
  subtitleText: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px !important",
    lineHeight: "25px",
    padding:'0px 0px',
  },
  authorText: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    padding:'24px 0px',
    color:'#6D787E',
    justifyContent:'left',
    alignContent:'left'
  },
});

interface BookProps {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  author: string;
  timeTakenToRead: number;
  numberOfReads: string;
  status: string;
  complete: number;
  synopsis: string;
  whoIsItFor: string;
  aboutAuthor: string;
}

interface Props{
  id:number;
}

function BookTemplate(props:Props) {
  const classes = useStyles();

  const {user} = useAuth0();

  const [book,setBook] = useState<BookProps>();

  const { bookId } = useParams();

  const [load, setLoad] = useState(false);


  const getBookById = async() =>{
    const response = await api.get("http://localhost:3001/books/"+bookId+"/");
    const data = response.data;
    setBook(data);
    setLoad(true);
  }

  const changeBookButton = async() =>{
    if(book?.complete === 100 || book?.complete === 0){
      book.complete = 31;
    }
    else if(book?.complete ===31){
      book.complete = 100;
    }
    await api.put("http://localhost:3001/books/" + bookId + "/", book);
    window.location.reload();
  }
 
  const [value,setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) =>{
    setValue(newValue);
  }

  useEffect(()=>{
    getBookById();
  });

  let budisable = book?.complete === 31 ?  true : false;

  return (
    <StyledEngineProvider injectFirst>
    <Box minHeight={"100vh"}>
    <Box width="90%" padding="0% 5%">
      <Box paddingTop="25px">
      <Header avatarIcon={true} chars={user?.name}></Header>
      </Box>
      <Box display={"flex"} justifyContent="center" width="99%" padding={"60px 0px"}>
        <Box  width="84%">
          <Box display={"flex"} justifyContent="flex-start" flexWrap={"wrap"}>
            <Box width="100%" color={'#03314B'} fontSize={"16px"} lineHeight={"20px"} textAlign="left" marginLeft="16%">
            Get the key ideas from
            </Box>
            <Box width="38%" paddingTop={"1%"} textAlign="left" marginLeft={"16%"}>
              <Typography className={classes.titleText} fontWeight={700}>{book?.title}</Typography>
              <Typography className={classes.subtitleText}>{book?.subtitle}</Typography>
              <Typography className={classes.authorText}>By {book?.author}</Typography>
              <IconText
              name={book?.timeTakenToRead+"-minutes read"}
              icon={<Time style={{ height: "16.67px", width: "16.67px" }} />}
              styling={"cardText"}
            />
          
              <Box display="flex" justifyContent={"space-between"} paddingTop={"60px"} marginLeft={"-10px"} fontFamily={"Cera Pro"} >
              <Buttons name={"Read Now"} onClick={changeBookButton} classing={""} disabled={budisable} icon={undefined} end={undefined}></Buttons> 
              <Buttons name={"Finished Reading"} onClick={changeBookButton} classing={"connect"} disabled={!budisable} icon={undefined} end={undefined}></Buttons>
              <Buttons name={"send to Kindle"} onClick={undefined} classing={"exploreNoH"} icon={undefined} end={<RightArrow/>}></Buttons>
          
            </Box>
            </Box>
            <Box width="40%" display={"flex"} justifyContent={"center"} paddingTop={"40px"} fontFamily={"Cera Pro"}>
              <Box component={"img"} sx={{height:"292px", width:"280px"}} alt="Book Image"
                src={book?.src} font-family="Cera Pro" />
            </Box>
          </Box>
          <Box width="80%" padding={"60px 0px"} marginLeft="15%" marginTop={"-2%"} fontFamily={"Cera Pro"}>
            <TabContext value={value} font-family="Cera Pro" >
              <TabList onChange={handleChange} textColor="inherit"
              font-family="Cera Pro"
              sx={{width:'56%'}}
            TabIndicatorProps={{
              style: {
                fontFamily:"Cera Pro",
                backgroundColor: "#2CE080",
              },
            }}>
                <Tab value="1" label="Synopsis" sx={{textTransform:"none", width:"33%",alignItems:"flex-start"} } font-family="Cera Pro"></Tab>
                <Tab value="2" label="Who is it for?" sx={{textTransform:"none", width:"33%",alignItems:"flex-start"}} font-family="Cera Pro"></Tab>
                <Tab value="3" label="About the author" sx={{textTransform:"none", width:"33%",alignItems:"flex-start"}} font-family="Cera Pro"></Tab>
              </TabList>
              <Box width="50%" minHeight={"200px"} marginLeft="0.5%" fontFamily={"Cera Pro"} justifyContent={"left"}>
                <TabPanel value="1" className={classes.authorText} style={{color:'#03314B'}}>{book?.synopsis}</TabPanel>
                <TabPanel value="2" className={classes.authorText} style={{color:'#03314B'}}>{book?.whoIsItFor}</TabPanel>
                <TabPanel value="3" className={classes.authorText} style={{color:'#03314B'}}>{book?.aboutAuthor}</TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Box>
      </Box>
      </Box>
      <Box paddingTop="20px">
      <Footer></Footer>
      </Box>
    </Box>
    </StyledEngineProvider>
  );
}

export default BookTemplate;