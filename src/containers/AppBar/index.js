import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  AppBar,
  CssBaseline
} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {useState} from "react";

export default function AppBarCustom() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen)

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={closeDrawer}>
        <Toolbar />
        <List sx={{width:256}}>
          <ListItemButton>
            <ListItem key="action1">
              <ListItemText primary="Action 1" />
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem key="action2">
              <ListItemText primary="Action 2" />
            </ListItem>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}