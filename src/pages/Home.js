import '../App.css';
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  Icon,
} from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "../alilce.css";
import ShopComponent from "../ShopComponent/ShopComponent";
import ItemComponent from "../ItemComponent/ItemComponent";
import LoginDialog from "../UserCredentialsDialog/LoginDialog";
import RegisterDialog from "../UserCredentialsDialog/RegisterDialog";

function Home() {
	
	const navigate = useNavigate();

  function Gotobooks() {
    navigate("/MyBooks", { replace: true });
  }
  
  function Gotohome() {
    navigate("/", { replace: true });
  }
  
  const AnImage = require("../shop.png");
  
  function logout() {
    localStorage.clear();
	setLocal(null);
  }
  
    const items = [
    <ShopComponent ImageSrc={AnImage} Name={"Book"} />,
    <ShopComponent ImageSrc={AnImage} Name={"Book"} />,
    <ShopComponent ImageSrc={AnImage} Name={"Book"} />,
    <ShopComponent ImageSrc={AnImage} Name={"Book"} />,
    <ShopComponent ImageSrc={AnImage} Name={"Book"} />,
    <ShopComponent ImageSrc={AnImage} Name={"Book"} />,
  ];
  
    const States = {
    PENDING: "PENDING",
    USER_CREATION: "USER_CREATION",
    USER_LOG_IN: "USER_LOG_IN",
    USER_AUTHENTICATED: "USER_AUTHENTICATED",
    HOME: "HOME",
  };
  
  
  let [authState, setAuthState] = useState(States.PENDING);
  let [local, setLocal] = useState(localStorage.getItem('username'));
  
  function login(user_id, password){
        return fetch(`http://localhost:8080/authenticateuser`,{ 
            method: 'POST',
			
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin',
				body: JSON.stringify({
					username: user_id,
					password: password
				  }),
        })
        .then(res => {res.json()
			console.log(res)
			if (res.status == 200) {
				setAuthState(States.PENDING)
				localStorage.setItem("username", user_id);
				setLocal(localStorage.getItem("username"));
			}
		});
    }
	

  function createUser(user_id, password) {
    return fetch(`http://localhost:8080/createuser/`, {
      method: "POST",
      headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin',
				body: JSON.stringify({
					username: user_id,
					password: password
				  }),
    }).then((response) => login(user_id, password));
  }
  
  
  return (
    <div className="App" style={{backgroundColor: '#C0C0C0'}}>
	<LoginDialog
        open={States.USER_LOG_IN === authState}
        title={"LOGIN"}
        onClose={() => setAuthState(States.PENDING)}
        submitText={"Login"}
        onCreateNew={() => setAuthState(States.USER_CREATION)}
        onSubmit={login}
      />

      <RegisterDialog
        open={States.USER_CREATION === authState}
        title={"REGISTER"}
        onClose={() => setAuthState(States.PENDING)}
        submitText={"Register"}
        onCreateNew={() => setAuthState(States.USER_LOG_IN)}
        onSubmit={createUser}
      />
		<Box display="flex" flexDirection="row">
        <Box className="navbar">
          <List className="navbar-li">
            <ListItem>
              <IconButton onClick={Gotohome}>
                <HomeIcon
                  className="navbar-icon"
                  sx={{ color: "white", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton onClick={local !== null ? (Gotobooks) : (() => setAuthState(States.USER_LOG_IN))}>
                <LibraryBooksIcon
                  className="navbar-icon"
                  sx={{ color: "#f3c317", fontSize: 40 }}
                />
              </IconButton>
            </ListItem>
            <ListItem className="last">
              {local !== null ? (
                <IconButton onClick={logout}>
                  <LogoutIcon
                    className="navbar-icon"
                    sx={{ color: "#f3c317", fontSize: 40 }}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={() => setAuthState(States.USER_LOG_IN)}>
                  <LoginIcon
                    className="navbar-icon"
                    sx={{ color: "#f3c317", fontSize: 40 }}
                  />
                </IconButton>
              )}
            </ListItem>
          </List>
        </Box>
		
		<Box className="mainContent">
          <AliceCarousel
            disableButtonsControls={"true"}
            className="Carousel"
            mouseTracking
            items={items}
			autoPlay
			infinite
			autoPlayInterval = {2000}
          />
		  
		  {local !== null ? (
		  <h3 className="welcome"> Welcome, {local}! </h3>
		  ) : (undefined)}
		  
          <div className="tabs">
            <input
              type="radio"
              className="tabs__radio"
              name="tabs-example"
              id="tab1"
              checked
            />
            <label htmlFor="tab1" className="tabs__label">
              Highly Rated
            </label>
            <div className="tabs__content">
              <List>
                <ListItem>
                  <ItemComponent
                    ItemName={"JAVA Book"}
                    ItemDescription={
                      "A book on JAVA Programming language"
                    }
                    ImageSrc={"https://m.media-amazon.com/images/I/514axA2lwpL.jpg"}
                  />
                </ListItem>
                <ListItem>
                  <ItemComponent
                    ItemName={"C++ Book"}
                    ItemDescription={
                      "A book on C++ Programming language"
                    }
                    ImageSrc={"https://images-na.ssl-images-amazon.com/images/I/81b-3FJTE9L.jpg"}
                  />
                </ListItem>

                <ListItem>
                  <ItemComponent
                    ItemName={"C Book"}
                    ItemDescription={
                      "A book on C Programming language"
                    }
                    ImageSrc={"https://m.media-amazon.com/images/I/413gJ6yqSSL.jpg"}
                  />
                </ListItem>

                <ListItem>
                  <ItemComponent
                    ItemName={"Python Book"}
                    ItemDescription={
                      "A book on Python Programming language"
                    }
                    ImageSrc={"https://images-na.ssl-images-amazon.com/images/I/41hGo6CTPqL._SY445_SX342_QL70_ML2_.jpg"}
                  />
                </ListItem>

                <ListItem>
                  <ItemComponent
                    ItemName={"Ruby Book"}
                    ItemDescription={
                      "A book on Ruby Programming language"
                    }
                    ImageSrc={"https://m.media-amazon.com/images/I/41oAv6o2srL.jpg"}
                  />
                </ListItem>
              </List>
            </div>

            <input
              type="radio"
              className="tabs__radio"
              name="tabs-example"
              id="tab2"
            />
            <label htmlFor="tab2" className="tabs__label">
              Popular Books
            </label>
            <div className="tabs__content">
              <List>
                <ListItem>
				<ItemComponent
                  ItemName={"Ruby Book"}
                    ItemDescription={
                      "A book on Ruby Programming language"
                    }
                    ImageSrc={"https://m.media-amazon.com/images/I/41oAv6o2srL.jpg"}
                  />
                </ListItem>
                <ListItem>
                  <ItemComponent
                    ItemName={"Python Book"}
                    ItemDescription={
                      "A book on Python Programming language"
                    }
                    ImageSrc={"https://images-na.ssl-images-amazon.com/images/I/41hGo6CTPqL._SY445_SX342_QL70_ML2_.jpg"}
                  />
                </ListItem>
              </List>
            </div>

            <input
              type="radio"
              className="tabs__radio"
              name="tabs-example"
              id="tab3"
            />
            <label htmlFor="tab3" className="tabs__label">
              Books you might like
            </label>
            <div className="tabs__content">
              <List>
                <ListItem>
                  <ItemComponent
                    ItemName={"JAVA Book"}
                    ItemDescription={
                      "A book on JAVA Programming language"
                    }
                    ImageSrc={"https://m.media-amazon.com/images/I/514axA2lwpL.jpg"}
                  />
                </ListItem>
                <ListItem>
                  <ItemComponent
                    ItemName={"C++ Book"}
                    ItemDescription={
                      "A book on C++ Programming language"
                    }
                    ImageSrc={"https://images-na.ssl-images-amazon.com/images/I/81b-3FJTE9L.jpg"}
                  />
                </ListItem>
              </List>
            </div>
          </div>
        </Box>
		
		</Box>
		</div>
  );
}

export default Home;
