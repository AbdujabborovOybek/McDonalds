import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  Button,
  DialogActions,
} from "@mui/material";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { acEditUser } from "../../Redux/User";
import { acLoading } from "../../Redux/Loading";
import { useNavigate } from "react-router-dom";
import { Order } from "../../Components/Order/Order";

export function Profile() {
  const user = useSelector((state) => state.reUser);
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState({ ...user });
  const [open, setOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(user.user ? false : true);
  const navigate = useNavigate();

  return (
    <Box
      className="animate__animated animate__fadeIn"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box style={myStyles.header}>
        <Typography variant="h5">{user.user}</Typography>
        <Typography>
          <NumberFormat
            value={user.phone}
            displayType={"text"}
            format="+### ## ### #####"
          />
        </Typography>
        <IconButton
          style={myStyles.headerAcions}
          onClick={() => {
            setOpen(true);
          }}
        >
          <EditIcon />
        </IconButton>
      </Box>

      <Box style={myStyles.body}>
        <Order />
      </Box>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            right: "0",
            top: "0",
          }}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            width: "100%",
            minWidth: "255px",
          }}
        >
          <Box
            component="form"
            style={myStyles.editProfile}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(acLoading(true));

              setTimeout(() => {
                dispatch(acEditUser(editUser));
                localStorage.setItem("user", JSON.stringify(editUser));
                dispatch(acLoading(false));
                setOpen(false);
              }, 500);
            }}
          >
            <input
              style={myStyles.editProfileInput}
              type="text"
              name="user"
              value={editUser.user}
              onChange={(e) => {
                setEditUser({ ...editUser, user: e.target.value });
              }}
              autoComplete="off"
            />
            <NumberFormat
              style={myStyles.editProfileInput}
              format="+998 (##) ### ####"
              allowEmptyFormatting
              name="phone"
              autoComplete="off"
              value={editUser.phone}
              onChange={(e) => {
                setEditUser({ ...editUser, phone: e.target.value });
              }}
            />

            <DialogActions style={myStyles.dialogActions}>
              <Button
                style={myStyles.editProfileButtonLogout}
                variant="contained"
                color="error"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                <LogoutIcon />
              </Button>
              <Button
                style={myStyles.editProfileButtonEdite}
                variant="contained"
                color="primary"
                type="submit"
              >
                Taxrirlash
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog open={loginModal}>
        <IconButton
          sx={{
            position: "absolute",
            right: "0",
            top: "0",
          }}
          onClick={() => {
            if (user.user) {
              setLoginModal(false);
            } else {
              navigate("/");
            }
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            width: "100%",
            padding: "10% 5% 5%",
          }}
        >
          <Box component="form">
            <input
              style={myStyles.editProfileInput}
              type="text"
              placeholder="Ism Familya"
            />
            <NumberFormat
              style={myStyles.editProfileInput}
              format="+998 (##) ### ####"
              allowEmptyFormatting
              name="phone"
              autoComplete="off"
            />

            <Button
              variant="contained"
              color="primary"
              style={myStyles.loginProfileBtn}
            >
              Tizimga kirish
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

const myStyles = {
  header: {
    width: "100%",
    height: "100px",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    position: "relative",
  },
  headerAcions: {
    position: "absolute",
    bottom: "0",
    right: "0",
    color: "white",
  },

  body: {
    width: "100%",
    height: "calc(100% - 160px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-start",
    flexWrap: "wrap",
    overflow: "auto",
    padding: "3% 0",
  },

  editProfile: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5% 0",
  },

  editProfileInput: {
    width: "100%",
    height: "40px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "0 5%",
    margin: "2% 0",
    outline: "none",
  },

  editProfileButton: {
    width: "100%",
    height: "40px",
  },

  dialogActions: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2% 0",
  },

  editProfileButtonLogout: {
    minWidth: "0px !important",
    width: "20%",
    height: "35px",
  },

  editProfileButtonEdite: {
    width: "80%",
    height: "35px",
  },

  loginProfileBtn: {
    width: "100%",
    height: "40px",
    margin: "2% 0",
  },
};
