import React from "react";
import { SwipeableDrawer, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { acOpenSwDrawer } from "../../Redux/OpenMenu";

export function SwDrawer() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.reOpenSwDrawer);

  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={() => {
          dispatch(acOpenSwDrawer(false));
        }}
        onOpen={() => {}}
        swipeAreaWidth={0}
        sx={{
          width: "100%",
          height: "300px",
        }}
      >
        <Box style={myStyle.mainBox}>
          <h1>Salom</h1>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

const myStyle = {
  mainBox: {
    width: "100%",
    height: "300px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "20px 20px 0 0",
  },
};
