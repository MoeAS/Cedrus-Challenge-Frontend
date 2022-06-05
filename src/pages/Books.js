import '../App.css';
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  Icon,
} from "@mui/material";

import BookComponent from '../components/BookComponent';

function Books() {
	
	const navigate = useNavigate();

  function Gotobooks() {
    navigate("/MyBooks", { replace: true });
  }
  
  function Gotohome() {
    navigate("/", { replace: true });
  }
  
  function logout() {
    localStorage.clear();
	Gotohome();
  }
  
  
  return (
    <div className="App" style={{backgroundColor: '#C0C0C0'}}>
		<Box display="flex" flexDirection="row">
        <Box className="navbar">
          <List className="navbar-li">
            <ListItem>
              <IconButton onClick={Gotohome}>
                <HomeIcon
                  className="navbar-icon"
                  sx={{ color: "#f3c317", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton onClick={Gotobooks}>
                <LibraryBooksIcon
                  className="navbar-icon"
                  sx={{ color: "white", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem className="last">
                <IconButton onClick={logout}>
                  <LogoutIcon
                    className="navbar-icon"
                    sx={{ color: "#f3c317", fontSize: 40 }}
                  />
                </IconButton>
            </ListItem>
          </List>
        </Box>
		<Box className="mainContent" style={{width:"100%"}}> 
			<BookComponent />
		</Box>
		</Box>
		</div>
  );
}

export default Books;
