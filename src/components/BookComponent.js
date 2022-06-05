import React, { useState } from "react";
import APIService from '../service/APIService'
import "../App.css";

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

import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";

export default class BookComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             books: []
        }
    }
	
    
    componentDidMount(){
        APIService.getBooks().then((data) => {
            this.setState({ books: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

	

    render() {
        return (
            <div>
                <h1 className="text-center">BookMania</h1>
				<img className="image-center" src = "https://cdn.dribbble.com/users/3665068/screenshots/6709481/image.png?compress=1&resize=400x300&vertical=top" />
				<br/> <br/> <br/> 
				<h3>Books List</h3>
				<br/>
				<div className="form-item">
					  <TextField
					  id="outlined-basic"
					  variant="outlined"
					  label="Search"
					  color="primary"
					  sx={{input: {color: "black"}}}
					  //value={search}
					  onChange={({ target: { value } }) => {
						  APIService.searchBook(value).then((data) => {
						  this.setState({ books: data })})
						  console.log(this.data)
					  }}
					/>
				</div>
				<br/> 
				<Button color="success" tag={Link} to={"/NewBook"}>Add Book</Button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Book Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(book =>
                                    <tr key={book.id}>
                                        <td>{book.name}</td>
                                        <td>{book.rating}</td>
										<td> 
											<ButtonGroup>
												<Button size="sm" color="primary" value={[book.id, book.name]} onClick={(e) => {{localStorage.setItem("book_id", e.target.value); window.location.href='/EditBook';}}}>Edit</Button>
												<Button size="sm" color="danger" value={book.name} onClick={(e) => {
													console.log(e.target.value);
													APIService.deleteBook(e.target.value);
													window.location.href='/MyBooks'}}>Delete</Button>
											</ButtonGroup>
										</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
			
        )
    }
}