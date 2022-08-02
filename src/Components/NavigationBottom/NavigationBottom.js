import React, { useEffect } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Badge,
} from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { acOpenMenu } from "../../Redux/OpenMenu";
import { useNavigate } from "react-router-dom";

export function NavigationBottom() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reAddProductToCart);
  const order = useSelector((state) => state.reOrder);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#ccc",
        position: "relative",
        zIndex: "99999",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <BottomNavigationAction
          label="Menu"
          icon={<LunchDiningIcon />}
          onClick={() => {
            dispatch(acOpenMenu(true));
            navigate("/");
          }}
        />
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => {
            navigate("/");
          }}
        />
        <BottomNavigationAction
          label="Cart"
          icon={
            <Badge badgeContent={cart.length} color="primary">
              <LocalMallIcon />
            </Badge>
          }
          onClick={() => {
            navigate("/cart");
          }}
        />

        <BottomNavigationAction
          label="Profile"
          icon={
            <Badge badgeContent={order.length} color="primary">
              <AccountCircleIcon />
            </Badge>
          }
          onClick={() => {
            navigate("/profile");
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
