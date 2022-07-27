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
import NumberFormat from "react-number-format";
import { acLoading } from "../../Redux/Loading";
import { acAddProductToCart } from "../../Redux/Cart";

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
          setCount(1);
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
                setCount(count <= 1 ? 1 : count - 1);
              }}
            >
              <RemoveIcon fontSize="large" />
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
                setCount(count >= 15 ? 15 : count + 1);
              }}
            >
              <AddIcon fontSize="large" />
            </Button>
          </CardActions>

          <Typography variant="h5">
            <NumberFormat
              value={product.price * count}
              displayType="text"
              thousandSeparator={true}
              suffix=" sum"
            />
          </Typography>

          <CardActions style={myStyle.cardActions}>
            <Button
              style={myStyle.cardActionsBtnAdd}
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(acLoading(true));
                setTimeout(() => {
                  dispatch(acLoading(false));
                  dispatch(acOpenSwDrawer(false));
                  dispatch(
                    acAddProductToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: count,
                      img: product.img,
                    })
                  );
                  setCount(1);
                }, 400);
              }}
            >
              <Typography variant="body1">Savatga joylash</Typography>
            </Button>
          </CardActions>
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

  cardActionsBtnAdd: {
    width: "100%",
    height: "40px",
  },
};
