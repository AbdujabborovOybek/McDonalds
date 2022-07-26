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
        swipeAreaWidth="0"
        sx={{
          width: "100%",
          height: "300px",
          borderRadius: "50px !important",
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
  },
};
