import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as Time } from "../../../images/time.svg";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import IconText from "../../atoms/IconTexts";
import { LinearProgress, makeStyles } from "@material-ui/core";
import Button from "../../atoms/Buttons";
import AddIcon from "@mui/icons-material/Add";
import api from "../../../appInterface/api";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    fontFamily: "Cera Pro",
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "white",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#E1ECFC",
    },
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

interface Props {
  id: number;
  image: string;
  bookName: string;
  authorName: string;
  read: string;
  time: number;
  progress?: boolean;
  librarybu?: boolean;
  finished?: boolean;
  readAgain?: boolean;
  progressValues?: number;
  key?: number;
}

function MediaCards(props: Props) {

  let navigate = useNavigate();

  let bookdetPage = (bookId:number) =>{
    navigate("/bookdet/"+bookId);
  }
  const classes = useStyles();

  const [books, setBooks] = useState<BookProps>();

  const [load, setLoad] = useState(false);

  const changeBookById = async () => {
    if (props.finished) {
      if (books !== undefined) {
        books.complete = 100;
      }
    } 
    else if (props.readAgain) {
      if (books !== undefined) {
        books.complete = 31;
      }
    }
    else if(props.librarybu){
      if (books !== undefined) {
        if(books.complete === 0 || books.complete === 100)
        {
          books.complete = 31;
        }
        else{
          books.complete = 100;
        }
      }
    }
    await api.put("http://localhost:3001/books/" + props.id + "/", books);
  };

  const getingBookById = async () => {
    const response = await api.get(
      "http://localhost:3001/books/" + props.id + "/"
    );
    const data = response.data;
    setBooks(data);
    setLoad(true);
  };

  const buttonFunction = async () => {
    getingBookById();
  };

  useEffect(() => {
    if (load) {
      changeBookById();
    }
    setLoad(false);
  }, [load]);

  let progressAction;
  if (props.progress) {
    progressAction = (
      <LinearProgress
        style={{ fontFamily: "Cera Pro",width: "284px", height: "15px", padding: "0px" }}
        variant="determinate"
        value={props.progressValues}
      />
    );
  }

  let libraryAction;
  if (props.librarybu) {
    if(props.progressValues === 31)
    {
      libraryAction = (
        <Button
        name="Finished"
        classing="library"
        icon={undefined}
        onClick={buttonFunction}
        end={undefined}
      />
        );
    }
    else if(props.progressValues === 0)
    {
      libraryAction = (
      <Button
        name="Add to library"
        classing="library"
        icon={<AddIcon />}
        onClick={buttonFunction}
        end={undefined}
      />
      );
    }
    else{
      libraryAction = (
        <Button
        name="Read again"
        classing="library"
        icon={undefined}
        onClick={buttonFunction}
        end={undefined}
      />
        );
    }
    
  }

  let finishedAction;
  if (props.finished) {
    finishedAction = (
      <Button
        name="Finished"
        classing="library"
        icon={undefined}
        onClick={buttonFunction}
        end={undefined}
      />
    );
  }

  let readAction;
  if (props.readAgain) {
    readAction = (
      <Button
        name="Read again"
        classing="library"
        icon={undefined}
        onClick={buttonFunction}
        end={undefined}
      />
    );
  }

  return (
    <StyledEngineProvider injectFirst>
      <Card sx={{ maxWidth: "284px" }}>
        <CardMedia
          component="img"
          height="292px"
          width="280px"
          src={props.image}
          alt="Book Image"
        />
        <CardContent>
          <Typography
          fontFamily={"Cera Pro"}
            textAlign={"left"}
            variant="subtitle1"
            fontSize={"18px"}
            lineHeight={"26px"}
            fontWeight={700}
            component="div"
            padding={"3px 0px"}
          >
            <Link sx={{textDecoration:"none", color:"inherit"}} onClick={() => bookdetPage(props.id)}>
            {props.bookName}
            </Link>
          </Typography>
          <Typography
            textAlign={"left"}
            fontFamily={"Cera Pro"}
            variant="body1"
            color="text.secondary"
            fontSize={"16px"}
            lineHeight={"45px"}
            fontWeight={400}
            padding={"3px 0px"}
          >
            {props.authorName}
          </Typography>
          <Box style={{ display: "flex", justifyContent: "space-between",fontFamily: "Cera Pro" }}>
            <IconText
              name={props.time+"-minutes read"}
              icon={<Time style={{ height: "18px", width: "16.67px" ,fontFamily: "Cera Pro"}} />}
              styling={"cardText"}
            />
            <IconText
              name={props.read+" reads"}
              icon={
                <PermIdentitySharpIcon
                  style={{ height: "16.67px", width: "16.67px",fontFamily: "Cera Pro" }}
                />
              }
              styling={"cardText"}
            />
          </Box>
        </CardContent>
        <CardActions
          className={classes.root}
          style={{ padding: "0px", borderRadius: "0px 0px 8px 8xp", fontFamily:"Cera Pro" }}
        >
          <Box>
            {props.librarybu ? <Box>{libraryAction}</Box> : null}
            {props.finished ? ( <Box display={"block"}>{finishedAction}</Box>) : null}
            {props.readAgain ? <Box display={"block"}>{readAction}</Box> : null}
            {props.progress ? (
              <Box display={"block"} position="relative" bottom="0px">
                {progressAction}</Box>
            ) : null}
          </Box>
        </CardActions>
      </Card>
    </StyledEngineProvider>
  );
}

export default MediaCards;