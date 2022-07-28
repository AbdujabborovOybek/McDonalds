import React, { useEffect, useState } from "react";
import "animate.css";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
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
import { acUser } from "../../Redux/User";
import { useNavigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddLocationIcon from "@mui/icons-material/AddLocation";

export function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        style={{
          width: "100%",
          minWidth: "300px !important",
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
        <DialogContent style={myStyle.dialogContent}>
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              padding: "3%",
            }}
            variant="p"
          >
            Tizimga Kiring
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box
            component="form"
            style={myStyle.formLogin}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(acLoading(true));

              setTimeout(() => {
                dispatch(
                  acUser({
                    id: new Date().getTime(),
                    user: e.target.user.value,
                    phine: e.target.phone.value,
                  })
                );

                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    id: new Date().getTime(),
                    user: e.target.user.value,
                    phine: e.target.phone.value,
                  })
                );

                enqueueSnackbar("Xush kelibsiz", {
                  variant: "success",
                });

                setOpen(false);
                dispatch(acLoading(false));
              }, 1000);
            }}
          >
            <input
              style={myStyle.formLoginInput}
              type="text"
              placeholder="Ism Familiya"
              name="user"
              autoComplete="off"
            />
            <NumberFormat
              style={myStyle.formLoginInput}
              format="+998 (##) ### ####"
              allowEmptyFormatting
              name="phone"
              autoComplete="off"
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

      <Dialog open={true}>
        <DialogContent
          sx={{
            width: "100%",
            minWidth: "240px !important",
          }}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Manzilni tanlang
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="5a"
                control={<Radio />}
                label="5a mik-rayon"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="5 mik-rayon"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="2 mik-rayon"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3 mik-rayon"
              />
            </RadioGroup>

            <Typography
              variant="p"
              sx={{
                color: "#CB2C32",
                width: "100%",
                height: "30px",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
              onClick={() => {
                navigate("/map", {
                  replace: true,
                });
              }}
            >
              <AddLocationIcon /> Manzilni tanlang
            </Typography>
          </FormControl>
        </DialogContent>
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

  dialogContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2%",
  },

  formLoginInput: {
    minWidth: "240px",
    width: "100%",
    height: "47px",
    letterSpacing: "3px",
    border: "2px solid #cccccc",
    borderRadius: "5px",
    margin: "5px 0",
    outline: "none",
    fontSize: "16px",
    padding: "0 4%",
  },

  formLoginButton: {
    width: "100%",
    height: "47px",
    marginTop: "5px",
  },
};
