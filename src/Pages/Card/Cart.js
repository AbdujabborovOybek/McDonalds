import React, { useEffect, useState } from "react";
import "animate.css";
import { Box, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { acClearCart } from "../../Redux/Cart";
import noCartBg from "../../Assets/Images/noCart.png";
import NumberFormat from "react-number-format";
import { CardItem } from "../../Components/CardItem/CardItem";
import { useSnackbar } from "notistack";
import { acLoading } from "../../Redux/Loading";

export function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reAddProductToCart);
  const [totalPayment, setTotalPayment] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

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
            <CardItem />
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(acLoading(true));

                setTimeout(() => {
                  dispatch(acLoading(false));
                  enqueueSnackbar("Buyurtma Qabul qilindi", {
                    variant: "success",
                  });
                  dispatch(acClearCart());
                }, 500);
              }}
            >
              <Typography variant="p">Xarid qilish</Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box style={myStyle.cardNotItem}>
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

  footerCard: {
    width: "100%",
    height: "75px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  cardNotItem: {
    width: "100%",
    height: "calc(100% - 55px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
  },
};
