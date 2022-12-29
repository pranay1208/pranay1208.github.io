import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import useResponsive from "../hooks/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";
import routes from "../routes";

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
