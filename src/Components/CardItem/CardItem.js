import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
  acDeleteFromCart,
  acIncProductInCard,
  acDecProductInCard,
} from "../../Redux/Cart";

export function CardItem() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reAddProductToCart);
  return (
    <>
      {cart.map((item) => {
        return (
          <Card style={myStyle.mainCatd} key={item.id}>
            <CardMedia
              style={myStyle.cardMedia}
              component="img"
              image={item.img}
              alt="Live from space album cover"
            />
            <Box style={myStyle.cardContent}>
              <CardContent>
                <Typography variant="body1">{reName(item.name)} </Typography>
              </CardContent>
              <CardActions
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  onClick={() => {
                    dispatch(acDecProductInCard(item.id));
                  }}
                >
                  <RemoveIcon
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </IconButton>
                <Typography variant="h6">{item.quantity}</Typography>
                <IconButton
                  onClick={() => {
                    dispatch(acIncProductInCard(item.id));
                  }}
                >
                  <AddIcon
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    dispatch(acDeleteFromCart(item.id));
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Box>
          </Card>
        );
      })}
    </>
  );
}

const myStyle = {
  mainCatd: {
    width: "100%",
    height: "110px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1.5% 0",
  },

  cardMedia: {
    width: "110px",
    height: "110px",
    padding: "3.5%",
  },

  cardContent: {
    width: "calc(100% - 110px)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

function reName(name) {
  const arr = name.split("");
  return arr.slice(0, 16).join("") + "...";
}
