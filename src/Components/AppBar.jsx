import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import useResponsive from "../hooks/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";
import routes from "../routes";
import { useState } from "react";

const navBarComponents = [
  { name: "About", href: routes.About },
  { name: "Experience", href: routes.Experience },
  { name: "Projects", href: routes.Projects },
  { name: "Contact", href: routes.Contact },
];

function TopBarDesktop({ backgroundColor }) {
  return (
    <AppBar sx={{ backgroundColor: backgroundColor }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            sx={{
              backgroundColor: "#FEFEFE",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#FEFEFE",
              },
            }}
            variant='outlined'
            href={routes.Home}
          >
            <Typography
              variant='h6'
              component='div'
              color={backgroundColor}
              fontFamily='RobotoCondensedBold'
            >
              Portfolio
            </Typography>
          </Button>
        </Box>
        {navBarComponents.map((i) => {
          return (
            <Button
              key={i.name}
              color='inherit'
              sx={{
                textTransform: "none",
                paddingX: 3,
              }}
              href={i.href}
            >
              <Typography
                variant='h6'
                component='div'
                fontFamily='RobotoFlex'
                fontWeight='bold'
              >
                {i.name}
              </Typography>
            </Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}

function TopBarMobile({ backgroundColor }) {
  const [open, setOpen] = useState(false);

  return (
    <AppBar sx={{ backgroundColor }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <IconButton
          sx={{
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "#FFF" },
          }}
        >
          <Typography
            color={backgroundColor}
            fontFamily='RobotoCondensedBold'
            variant='h6'
            component='div'
          >
            PA
          </Typography>
        </IconButton>
      </Toolbar>
      <Drawer open={open} onClose={() => setOpen(false)} anchor='left'>
        <Box
          role='presentation'
          sx={{ maxWidth: "500px", width: "10vh", minWidth: "250px" }}
        >
          <List sx={{ paddingTop: 0 }}>
            <ListItem
              key='home'
              sx={{
                backgroundColor: backgroundColor,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                fullWidth
                sx={{
                  backgroundColor: "#FEFEFE",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#FEFEFE",
                  },
                }}
                variant='outlined'
                href={routes.Home}
              >
                <Typography
                  variant='h6'
                  component='div'
                  color={backgroundColor}
                  fontFamily='RobotoCondensedBold'
                >
                  Portfolio
                </Typography>
              </Button>
            </ListItem>
            <Divider />
            {navBarComponents.map((i) => {
              return (
                <ListItem key={i.name}>
                  <ListItemButton href={i.href}>
                    <ListItemText
                      primary={i.name}
                      primaryTypographyProps={{
                        fontFamily: "RobotoCondensed",
                        variant: "h6",
                        component: "div",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
            <Divider />
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

const AppBarResponsive = (props) => {
  const { isDesktop } = useResponsive();

  if (isDesktop) {
    return <TopBarDesktop {...props} />;
  }

  return <TopBarMobile {...props} />;
};

export default AppBarResponsive;
