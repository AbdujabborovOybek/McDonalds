import React from "react";
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
import { useDispatch } from "react-redux";
import { acOpenMenu } from "../../Redux/OpenMenu";

export function NavigationBottom() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  return (
    <Box >
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
          }}
        />
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Cart"
          icon={
            <Badge badgeContent={1} color="primary">
              <LocalMallIcon />
            </Badge>
          }
        />

        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
}
