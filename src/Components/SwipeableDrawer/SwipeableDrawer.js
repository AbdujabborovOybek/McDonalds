import React, { useState } from "react";
import {
  SwipeableDrawer,
  Box,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { acOpenSwDrawer } from "../../Redux/OpenMenu";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function SwDrawer() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.reOpenSwDrawer);
  const product = useSelector((state) => state.reSelectProduct);
  const [count, setCount] = useState(1);

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
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
            }}
          >
            {product.name} {product.price}
          </Typography>
          <CardActions style={myStyle.cardActions}>
            <Button
              style={myStyle.cardActionsBtn}
              variant="contained"
              color="primary"
              onClick={() => {
                setCount(count >= 15 ? 15 : count + 1);
              }}
            >
              <AddIcon fontSize="large" />
            </Button>
            <Typography
              variant="h4"
              sx={{
                width: "50px",
                textAlign: "center",
              }}
            >
              {count}
            </Typography>
            <Button
              style={myStyle.cardActionsBtn}
              variant="contained"
              color="primary"
              onClick={() => {
                setCount(count <= 1 ? 1 : count - 1);
              }}
            >
              <RemoveIcon fontSize="large" />
            </Button>
          </CardActions>

          <Typography variant="h6">{product.price * count}</Typography>
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
    padding: "3% 5%",
  },
  cardActions: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardActionsBtn: {
    width: "85px",
    height: "40px",
  },
};
