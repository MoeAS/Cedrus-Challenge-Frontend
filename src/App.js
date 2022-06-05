import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
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
import Home from './pages/Home';
import Books from './pages/Books';
import CreateBook from './pages/createBook';
import EditBook from './pages/EditBook';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
		  <Route path="/MyBooks" element={<Books />}/>
		  <Route path="/NewBook" element={<CreateBook />}/>
		  <Route path="/EditBook" element={<EditBook />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
