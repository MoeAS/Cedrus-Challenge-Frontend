import '../App.css';
import React, { useState, Component } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import APIService from '../service/APIService'
import {
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  Icon,
} from "@mui/material";

import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import { Rating } from 'react-simple-star-rating';
import { MdOutlineSentimentDissatisfied,
  MdOutlineSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVeryDissatisfied,
  MdOutlineSentimentVerySatisfied
} from 'react-icons/md';

function EditBook(props) {
	
	const customIcons = [
  { icon: <MdOutlineSentimentDissatisfied size={50} /> },
  { icon: <MdOutlineSentimentNeutral size={50} /> },
  { icon: <MdOutlineSentimentSatisfied size={50} /> },
  { icon: <MdOutlineSentimentVeryDissatisfied size={50} /> },
  { icon: <MdOutlineSentimentVerySatisfied size={50} /> }
]
	
	const navigate = useNavigate();
	
	function Gotobooks() {
    navigate("/MyBooks", { replace: true });
  }
	const [rating, setRating] = useState(0);
	const [bookname, setBookname] = useState("");
	
	const location = useLocation();
	console.log(location.data)
	
	const handleRating = (rate) => {
	setRating(rate/20)
	console.log(rating)
	}
   
  return(
    <div className="App, create-pg">
		<div>
		<br />
		<h2> Edit Book </h2>
		<br />
          <TextField
            color="primary"
            label="Book Name"
            type="text"
            sx={{input: {color: "black"}}}
            value={bookname}
            onChange={({ target: { value } }) => setBookname(value)}
          />
        </div>
		<br />
        <div>
          <Rating 
		  onClick={handleRating} 
		  initialValue={0}
		  ratingValue={rating}
		  allowHover
		  transition
		  customIcons={customIcons}
		  />
        </div>
        <br></br>
        <Button
          sx={{backgroundColor: "#222732"}}
          variant="contained"
          onClick={() => {APIService.updateBook(bookname, rating); window.location.href='/MyBooks';}}
        >
          Submit
        </Button>
		
		<Button
          sx={{backgroundColor: "#222732"}}
          variant="contained"
          onClick={Gotobooks}
		  className="create-pg"
        >
          Go Back
        </Button>
      </div>
  );
}

export default EditBook;
