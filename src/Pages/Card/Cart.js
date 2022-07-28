import React, { useEffect, useState } from "react";
import "animate.css";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  IconButton,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { acClearCart } from "../../Redux/Cart";
import noCartBg from "../../Assets/Images/noCart.png";
import NumberFormat from "react-number-format";
import { CardItem } from "../../Components/CardItem/CardItem";
import { useSnackbar } from "notistack";
import { acLoading } from "../../Redux/Loading";
import CloseIcon from "@mui/icons-material/Close";

export function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reAddProductToCart);
  const user = useSelector((state) => state.reUser);
  const [totalPayment, setTotalPayment] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

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
                if (user.id) {
                  dispatch(acLoading(true));
                  setTimeout(() => {
                    dispatch(acLoading(false));
                    enqueueSnackbar("Buyurtma Qabul qilindi", {
                      variant: "success",
                    });
                    dispatch(acClearCart());
                  }, 500);
                } else {
                  setOpen(true);
                }
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

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
          sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Typography variant="p">
            Xaridni Amalga oshirish uchun tizimga kirishingiz kerak!!!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box component="form" style={myStyle.formLogin}>
            <TextField
              style={myStyle.formLoginInput}
              id="outlined-basic"
              label="Isim Familya"
              variant="outlined"
            />
            <TextField
              style={myStyle.formLoginInput}
              id="outlined-basic"
              label="Telefon"
              variant="outlined"
              sx={{
                marginTop: "15px",
              }}
              type="number"
            />
            <Button
              variant="contained"
              color="primary"
              style={myStyle.formLoginButton}
              type="submit"
            >
              <Typography variant="p">Tizimga kirish</Typography>
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
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

  formLogin: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  formLoginInput: {
    width: "100%",
    letterSpacing: "3px",
  },

  formLoginButton: {
    width: "100%",
    height: "50px",
    marginTop: "15px",
  },
};
