import React, { useEffect, useState } from "react";
import "animate.css";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
  acDeleteFromCart,
  acIncProductInCard,
  acDecProductInCard,
  acClearCart,
} from "../../Redux/Cart";
import noCartBg from "../../Assets/Images/noCart.png";
import NumberFormat from "react-number-format";

export function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reAddProductToCart);

  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.map((item) => {
      total += item.price * item.quantity;

      return total;
    });
    setTotalPayment(total);
  }, [cart]);

  return (
    <>
      {cart.length !== 0 ? (
        <Box
          className="animate__animated animate__fadeIn"
          style={myStyle.contener}
        >
          <Box style={myStyle.reportCard}>
            <Typography
              variant="h4"
              sx={{
                color: "#ffffff",
              }}
            >
              <NumberFormat
                value={totalPayment}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" sum"}
              />
            </Typography>
          </Box>

          <Box style={myStyle.bodyCard}>
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
                      <Typography component="div" variant="body2">
                        Live From Space
                      </Typography>
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
          </Box>

          <Box style={myStyle.footerCard}>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                dispatch(acClearCart());
              }}
            >
              <Typography variant="p">Bekor qilish</Typography>
            </Button>
            <Button variant="contained" color="primary">
              <Typography variant="p">Xarid qilish</Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "calc(100% - 55px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src={noCartBg}
            alt=""
          />
          <Typography
            variant="h4"
            sx={{
              color: "#CB2C32",
              textAlign: "center",
            }}
          >
            No products in cart
          </Typography>
        </Box>
      )}
    </>
  );
}

const myStyle = {
  contener: {
    width: "100%",
    height: "100%",
  },

  reportCard: {
    width: "100%",
    height: "90px",
    backgroundColor: "#CB2C32",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bodyCard: {
    width: "100%",
    height: "calc(100% - 220px)",
    display: "flex",
    overflowY: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "3% 2%",
    alignContent: "flex-start",
  },

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

  footerCard: {
    width: "100%",
    height: "75px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
};
