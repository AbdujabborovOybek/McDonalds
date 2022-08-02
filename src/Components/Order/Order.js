import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  Box,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import img1 from "./img1.png";
import { OrderItem } from "./OrderItem";
import { acRemoveFromOrder } from "../../Redux/Order";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export function Order() {
  const [expanded, setExpanded] = useState(false);
  const user = useSelector((state) => state.reUser);
  // const [timer, setTimer] = useState(0);
  const nowDate = new Date().toLocaleDateString("en-GB", {
    timeZone: "Asia/Tashkent",
  });
  const dispatch = useDispatch();
  const order = useSelector((state) => state.reOrder);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // const time = 1659182592087 + 1800000;
  // const myTimer = () => {
  //   const countDownDate = new Date(time).getTime();
  //   const now = new Date().getTime();
  //   const distance = countDownDate - now;
  //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //   return `${minutes < 10 ? `0${minutes}` : minutes} : ${
  //     seconds < 10 ? `0${seconds}` : seconds
  //   }`;
  // };

  // setInterval(() => {
  //   setTimer(myTimer());
  // }, 1000);

  return (
    <>
      {order.length !== 0 ? (
        order.map((item, index) => {
          return (
            <Card
              key={item.time}
              sx={{
                width: "100%",
                maxWidth: 310,
                margin: "3% 0",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {user.user.charAt(0)}
                  </Avatar>
                }
                title={user.user}
                subheader={`Buyurtma sanasi: ${nowDate}`}
              />
              <CardMedia
                component="img"
                height="194"
                image={img1}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {/* {timer} */}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>

                <Box
                  sx={{
                    width: "calc(100% - 48px)",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="overline" color="text.secondary">
                    Buyurtmani Ko'rish
                    <ExpandMore
                      expand={index === expanded ? true : false}
                      onClick={() => {
                        setExpanded(index);
                      }}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </Typography>
                </Box>
              </CardActions>
              <Collapse
                in={index === expanded ? true : false}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Typography paragraph>Sizning Buyurtmangiz:</Typography>
                  <OrderItem order={item.order} />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      width: "100%",
                      height: "40px",
                      marginTop: "10px",
                      fontSize: "16px",
                    }}
                    // disabled={false}
                    onClick={() => {
                      dispatch(acLoading(true));
                      setTimeout(() => {
                        if (order.length !== 0) {
                          navigate("/");
                        }
                        dispatch(acRemoveFromOrder(item.time));
                        dispatch(acLoading(false));
                        enqueueSnackbar("Yoqimli ishtaxa", {
                          variant: "success",
                        });
                      }, 1000);
                    }}
                  >
                    Buyurtma yetib keldi
                  </Button>
                </CardContent>
              </Collapse>
            </Card>
          );
        })
      ) : (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5%",
            textAlign: "center",
          }}
        >
          Sizda buyurtmalar mavjud emas
        </Typography>
      )}
    </>
  );
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
