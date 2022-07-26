import { NavigationBottom } from "./Components/NavigationBottom/NavigationBottom";
import { Box, Paper } from "@mui/material";
import { DrawerMenu } from "./Components/Drawer/DrawerMenu";
import { Products } from "./Pages/Products/Product";
import { SwDrawer } from "./Components/SwipeableDrawer/SwipeableDrawer";

export function App() {
  return (
    <>
      <Box sx={MyStyle.BoxContener}>
        <Products />
        <Paper sx={MyStyle.Paper} elevation={3}>
          <NavigationBottom />
        </Paper>
      </Box>
      <DrawerMenu />
      <SwDrawer />
    </>
  );
}

const MyStyle = {
  BoxContener: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#fafafa",
    position: "relative",
  },

  Paper: {
    maxWidth: "768px",
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
};
