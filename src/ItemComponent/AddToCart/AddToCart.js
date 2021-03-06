import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import "./AddToCart.css";

let theme = createTheme({
  palette: {
    primary: {
      main: "#191D24",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export default function AddToCart({
  open,
  onSubmit,
  onClose,
  ItemPrice,
  ItemName,
  ItemDescription,
  ImageSrc,
  ItemShop,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <div className="dialog-container">
          <DialogTitle>
            <Typography variant="h4" sx={{ color: "white" }}>
              {ItemShop}
            </Typography>
          </DialogTitle>

          <Box sx={{ marginBottom: "2rem" }} display="flex" flexDirection="row">
            <img src={ImageSrc} width = {250} height = {250}/>

            <Box
              sx={{ marginLeft: "2rem" }}
              display="flex"
              flexDirection="column"
            >
              <Typography sx={{ color: "white" }}>{ItemName}</Typography>
              <Typography sx={{ color: "#808080" }}>
                {ItemDescription}
              </Typography>
            </Box>
          </Box>
        </div>
      </Dialog>
    </ThemeProvider>
  );
}
