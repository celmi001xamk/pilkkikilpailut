import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigaatio() {
  const [naytaValikko, setNaytaValikko] = useState(false);

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          onClick={() => setNaytaValikko(true)}
          color="inherit"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="top"
          open={naytaValikko}
          onClose={() => setNaytaValikko(false)}
        >
          <List onClick={() => setNaytaValikko(false)}>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Aloitus"></ListItemText>
            </ListItem>

            <ListItem button component={Link} to="/saannot">
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Säännöt"></ListItemText>
            </ListItem>

            <ListItem button component={Link} to="/ilmoittaudu">
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Ilmoittaudu"></ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <Container align="center">
          <Button style={{padding: 15}} color="inherit" component={Link} to="/">Aloitus</Button>
          <Button style={{padding: 15}} color="inherit" component={Link} to="/saannot">Säännöt</Button>
          <Button style={{padding: 15}} color="inherit" component={Link} to="/ilmoittaudu">Ilmoittaudu</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
