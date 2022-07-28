import React from "react";
import { NavigationBottom } from "./Components/NavigationBottom/NavigationBottom";
import { Box, Paper, Backdrop, CircularProgress } from "@mui/material";
import { DrawerMenu } from "./Components/Drawer/DrawerMenu";
import { Products } from "./Pages/Products/Product";
import { SwDrawer } from "./Components/SwipeableDrawer/SwipeableDrawer";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Card/Cart";
import { Profile } from "./Pages/Profile/Profile";

export function App() {
  const loading = useSelector((state) => state.reLoading);

  return (
    <>
      <Box sx={MyStyle.BoxContener}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="*" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Paper sx={MyStyle.Paper} elevation={3}>
          <NavigationBottom />
        </Paper>
      </Box>
      <DrawerMenu />
      <SwDrawer />
      <Backdrop sx={{ color: "#fff", zIndex: "99999999999999" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

const MyStyle = {
  BoxContener: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#fafafa",
    position: "relative",
  },

  Paper: {
    maxWidth: "768px",
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
};
