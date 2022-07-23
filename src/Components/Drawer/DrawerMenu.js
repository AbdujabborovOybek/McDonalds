import * as React from "react";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector, useDispatch } from "react-redux";
import { acOpenMenu } from "../../Redux/OpenMenu";
import logo2 from "../../Assets/Icons/logo2.jpg";

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
        <ListItem sx={myStyle.DrawerHeader}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={logo2}
            alt=""
          />
        </ListItem>

        <Divider
          sx={{
            margin: "0px",
            height: "1px",
            backgroundColor: "#e0e0e0",
            width: "100%",
          }}
        />

        {MenuName.map((item, index) => {
          return (
            <ListItem disablePadding key={index}>
              <ListItemButton
                variant="contained"
                onClick={() => {
                  dispatch(acOpenMenu(false));
                }}
              >
                <ListItemIcon>
                  <MailIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

const MenuName = [
  "Lorem1",
  "Lorem2",
  "Lorem3",
  "Lorem4",
  "Lorem5",
  "Lorem6",
  "Lorem7",
  "Lorem8",
  "Lorem9",
];

const myStyle = {
  Drawer: {
    width: "300px",
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
    height: "70px",
    position: "relative",
    backgroundColor: "#C01416",
  },

  DrawerHeaderImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    display: "none",
  },

  List: {
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0",
  },
};
