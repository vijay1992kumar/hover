import React from "react";
import {
  Home,
  BarChart,
  EmojiEvents,
  ChildCare,
  Lock,
  Settings,
  Notifications,
  LightMode,
} from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;

const SidebarItems = [
  { text: "Dashboard", icon: <Home /> },
  { text: "Usage Stats", icon: <BarChart /> },
  { text: "Gamified Goals", icon: <EmojiEvents /> },
  { text: "Child Profiles", icon: <ChildCare /> },
  { text: "Access Controls", icon: <Lock /> },
  { text: "Rewards", icon: <EmojiEvents /> },
  { text: "Settings", icon: <Settings /> },
];

const Sidebar = () => {
  return (
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {SidebarItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{paddingLeft:"1rem"}}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
};

export default Sidebar;
