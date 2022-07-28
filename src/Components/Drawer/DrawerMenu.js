import * as React from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { acOpenMenu } from "../../Redux/OpenMenu";
import logo2 from "../../Assets/Icons/logo2.jpg";

import icon1 from "./MenuIcons/breakfast.jpg";
import icon2 from "./MenuIcons/burgers.jpg";
import icon3 from "./MenuIcons/combo_meal.jpg";
import icon5 from "./MenuIcons/desserts_shakes.jpg";
import icon6 from "./MenuIcons/drinks.jpg";
import icon7 from "./MenuIcons/chicken_sandwiches.jpg";
import icon8 from "./MenuIcons/happy_meal.jpg";
import icon9 from "./MenuIcons/Menu_LeftRail_mcd.jpg";
import icon10 from "./MenuIcons/snacks_sides.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { acTypeProduct } from "../../Redux/TypeProduct";

export function DrawerMenu() {
  const openMenu = useSelector((state) => state.reOpenMenu);
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="left"
      open={openMenu}
      onClose={() => {
        dispatch(acOpenMenu(false));
      }}
      sx={myStyle.Drawer}
    >
      <List sx={myStyle.List}>
        <Box
          sx={{
            width: "100%",
            height: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#C01416",
            position: "relative",
            zIndex: "1",
          }}
        >
          <ListItem sx={myStyle.DrawerHeader}>
            <img
              style={{
                width: "75%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={logo2}
              alt=""
            />
          </ListItem>

          <Button
            sx={{
              position: "absolute",
              right: "0",
              minWidth: "40px !important",
              color: "white",
            }}
            onClick={() => {
              dispatch(acOpenMenu(false));
            }}
          >
            <ArrowBackIosIcon />
          </Button>
        </Box>

        <Box style={myStyle.BoxMenu}>
          {menuDrawer.map((item, index) => {
            return (
              <ListItem
                disablePadding
                key={index}
                sx={{
                  height: "60px",
                }}
              >
                <ListItemButton
                  variant="contained"
                  onClick={() => {
                    dispatch(acOpenMenu(false));
                    dispatch(acTypeProduct(item.type));
                  }}
                >
                  <ListItemIcon
                    sx={{
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <img src={item.icon} alt="" />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>
      </List>
    </Drawer>
  );
}

const myStyle = {
  Drawer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute !important",
    paddingTop: "40px !important",
  },

  DrawerHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80px",
    position: "relative",
    backgroundColor: "#C01416",
  },

  DrawerHeaderImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "absolute",
  },

  List: {
    minWidth: "300px",
    maxWidth: "340px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0",
  },

  BoxMenu: {
    width: "100%",
    height: "90%",
    overflowY: "auto",
    padding: "2% 0 ",
  },
};

const menuDrawer = [
  {
    id: 1,
    name: "Breakfast",
    icon: icon1,
    type: "mc_breakfast",
  },
  {
    id: 2,
    name: "Burgers",
    icon: icon2,
    type: "mc_burgers",
  },
  {
    id: 3,
    name: "Combo Meal",
    icon: icon3,
    type: "mc_combo_meal",
  },
  {
    id: 5,
    name: "Desserts & Shakes",
    icon: icon5,
    type: "mc_dessert_shakes",
  },
  {
    id: 6,
    name: "Drinks",
    icon: icon6,
    type: "mc_beverages",
  },
  {
    id: 7,
    name: "Featured Favorites",
    icon: icon7,
    type: "mc_chicken_sandwiches",
  },
  {
    id: 8,
    name: "Happy Meal",
    icon: icon8,
    type: "mc_happy_meal",
  },
  {
    id: 9,
    name: "Menu Left Rail",
    icon: icon9,
    type: "mc_cafe_bakery",
  },
  {
    id: 10,
    name: "Snacks & Sides",
    icon: icon10,
    type: "mc_snacks_sides",
  },
];

// [
//   "mc_dessert_shakes",
//   "mc_beverages",
//   "mc_breakfast",
//   "mc_burgers",
//   "mc_chicken_sandwiches",
//   "mc_combo_meal",
//   "mc_happy_meal",
//   "mc_cafe_bakery",
//   "mc_snacks_sides",
//   "mc_cafe_drinks",
// ];
